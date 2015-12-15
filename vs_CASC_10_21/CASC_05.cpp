// CASC_05.cpp : Defines the class behaviors for the application.
//

#include "stdafx.h"
#include "CASC_05.h"
#include "CASC_05Dlg.h"
#include "WriteQueue.h"
#include "WriteHandler.h"

#include <afxmt.h>//增加CEvent类的头文件

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

int left;
int right;
int top;
int bottom;
char global_num;

//数字键盘操作模式输入========================与PLC字寄存器有关
int global_opr_num_key;//0无操作
//数字键盘确认与取消状态
int global_status_num_key;//0无操作1确认2取消
//字符键盘确认与取消状态
int global_status_char_key;//0无操作1确认2取消
//PLC通讯用全局变量
char m_char_to_float[8];
char r_buf_static[BUF_SIZE];
char s_buf_static[BUF_SIZE];
char r_buf_alarm[36];

//线程运行控制用状态量与触发事件变量
int thread_status;
//CEvent global_m_Event(FALSE,FALSE);
DWORD m_dwThreadId_Wr;
HANDLE m_hThread_Wr;
DWORD m_dwThreadId_Rd;
HANDLE m_hThread_Rd;
//与PLC交换用位控制寄存器

//与PLC交换用字控制寄存器
//模式切换
int global_mode;
//写入读取控制量状态--------------------------------与PLC的写入读取状态
int global_opr_wr_rd;
float read_convert;
//手动按键状态-------------------------------------------------
int global_jog_rot_status;
int global_jog_rot_status_2;
int global_jog_brk_status;
int global_jog_col_status;
int global_jog_gas_status;
int global_jog_axis_status;
int global_jog_rot_link;
int global_jog_slv_link;
//
//配方用变量
float	global_edit_pin[10];
float	global_edit_slv[10];
float	global_edit_time[10];
float	global_edit_rot[10];
int     global_i_char_to_float;
int     global_m;
char	global_recipe_rot_spd[10][8];
char	global_recipe_pin_pos[10][8];
char	global_recipe_slv_pos[10][8];
char	global_recipe_time[10][8];
//辅助功能定义
int     global_aux_hot_status;
int     global_aux_axis_confirm;

//数字变量
CString test;
int     global_num_id;
//字符变量
CString char_test;
//手动
float global_rot_spd_disp;//旋转速度显示
float global_torque_disp;//转矩显示

bool global_wirte_file_flag;//记录torque标记
WriteQueue global_queue;
WriteHandler global_handler;

CString global_recipe_name;


float global_pin_limit_dn;//pin下限位
float global_pin_limit_up;//pin上限位
float global_slv_limit_dn;//slv下限位
float global_slv_limit_up;//slv上限位
int   global_up_dn_lim_status;//pin&slv上下限位
int   global_exe_sen_status;//自动用
float global_slv_pos_disp;//slv实时位置显示
float global_pin_pos_disp;//pin实时位置显示
float global_slv_spd_disp;//slv实时速度显示
float global_pin_spd_disp;//pin实时速度显示
float global_weild_show_time;//暂存焊接点计数器
int   global_slv_up_status;//slv上按钮状态
int   global_slv_dn_status;//slv下按钮状态
int   global_pin_up_status;//pin上按钮状态
int   global_pin_dn_status;//pin上按钮状态
int   global_pin_slv_btn_st;//pin&slv按钮状态
int   global_slv_latch;
int   global_pin_latch;
char  global_pin_obj[9];
char  global_slv_obj[9];
int   global_pin_obj_status;
int   global_slv_obj_status;
float global_pin_obj_mid;
float global_slv_obj_mid;
float global_pin_axis_set;
float global_slv_axis_set;
int   global_display_1;
int   global_display_2;
int   global_display_3;
int   global_display_4;
int   global_display_5;
int   global_display_6;
int   global_display_7;
int   global_display_8;
//辅助功能
int   global_home_start;
int   global_home_gas;
int   global_home_pin;
int   global_home_slv;
int   global_home_led;
int   global_alarm;
int   global_align_slv_s;
int   global_align_slv_f;
int   global_align_pin_s;
int   global_align_pin_f;
//重绘变量
float global_slv_cur_pos;
float global_pin_cur_pos;
float global_slv_lst_pos;
float global_pin_lst_pos;
int   global_paint;
//报警
bool  global_alarm_status;
char  r_buf_alarm_m[6];
//分页
int   global_windows_num;

/////////////////////////////////////////////////////////////////////////////
// CCASC_05App

BEGIN_MESSAGE_MAP(CCASC_05App, CWinApp)
	//{{AFX_MSG_MAP(CCASC_05App)
		// NOTE - the ClassWizard will add and remove mapping macros here.
		//    DO NOT EDIT what you see in these blocks of generated code!
	//}}AFX_MSG
	ON_COMMAND(ID_HELP, CWinApp::OnHelp)
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCASC_05App construction

CCASC_05App::CCASC_05App()
{
	// TODO: add construction code here,
	// Place all significant initialization in InitInstance
	global_pin_limit_dn=0;//pin下限位
	global_pin_limit_up=0;//pin上限位
	global_slv_limit_dn=0;//slv下限位
	global_slv_limit_up=0;//slv上限位
	global_up_dn_lim_status=0;//pin&slv上下限位
}

/////////////////////////////////////////////////////////////////////////////
// The one and only CCASC_05App object
CCASC_05App theApp;



/////////////////////////////////////////////////////////////////////////////
// CCASC_05App initialization

BOOL CCASC_05App::InitInstance()
{
	if (!InitATL())
		return FALSE;

	AfxEnableControlContainer();

	CCommandLineInfo cmdInfo;
	ParseCommandLine(cmdInfo);

	if (cmdInfo.m_bRunEmbedded || cmdInfo.m_bRunAutomated)
	{
		return TRUE;
	}



	// Standard initialization
	// If you are not using these features and wish to reduce the size
	//  of your final executable, you should remove from the following
	//  the specific initialization routines you do not need.

#ifdef _AFXDLL
	Enable3dControls();			// Call this when using MFC in a shared DLL
#else
	Enable3dControlsStatic();	// Call this when linking to MFC statically
#endif

	WSADATA wsd;
	WSAStartup(MAKEWORD(2,2),&wsd);
	//初始化COM环境
	::CoInitialize(NULL);

	GdiplusStartupInput gdiplusStartupInput;
	ULONG_PTR   gdiplusToken;
	GdiplusStartup(&gdiplusToken, &gdiplusStartupInput, NULL);

	CCASC_05Dlg dlg;
	m_pMainWnd = &dlg;
	int nResponse = dlg.DoModal();
	if (nResponse == IDOK)
	{
		// TODO: Place code here to handle when the dialog is
		//  dismissed with OK
	}
	else if (nResponse == IDCANCEL)
	{
		// TODO: Place code here to handle when the dialog is
		//  dismissed with Cancel
	}

	// Since the dialog has been closed, return FALSE so that we exit the
	//  application, rather than start the application's message pump.
	return FALSE;
}

#include <initguid.h>
#include "CASC_05_i.c"
	
CCASC_05Module _Module;

BEGIN_OBJECT_MAP(ObjectMap)
END_OBJECT_MAP()

LONG CCASC_05Module::Unlock()
{
	AfxOleUnlockApp();
	return 0;
}

LONG CCASC_05Module::Lock()
{
	AfxOleLockApp();
	return 1;
}
LPCTSTR CCASC_05Module::FindOneOf(LPCTSTR p1, LPCTSTR p2)
{
	while (*p1 != NULL)
	{
		LPCTSTR p = p2;
		while (*p != NULL)
		{
			if (*p1 == *p)
				return CharNext(p1);
			p = CharNext(p);
		}
		p1++;
	}
	return NULL;
}


int CCASC_05App::ExitInstance()
{
	if (m_bATLInited)
	{
		_Module.RevokeClassObjects();
		_Module.Term();
		CoUninitialize();
	}

	return CWinApp::ExitInstance();

}

BOOL CCASC_05App::InitATL()
{
	m_bATLInited = TRUE;

#if _WIN32_WINNT >= 0x0400
	HRESULT hRes = CoInitializeEx(NULL, COINIT_MULTITHREADED);
#else
	HRESULT hRes = CoInitialize(NULL);
#endif

	if (FAILED(hRes))
	{
		m_bATLInited = FALSE;
		return FALSE;
	}

	_Module.Init(ObjectMap, AfxGetInstanceHandle());
	_Module.dwThreadID = GetCurrentThreadId();

	LPTSTR lpCmdLine = GetCommandLine(); //this line necessary for _ATL_MIN_CRT
	TCHAR szTokens[] = _T("-/");

	BOOL bRun = TRUE;
	LPCTSTR lpszToken = _Module.FindOneOf(lpCmdLine, szTokens);
	while (lpszToken != NULL)
	{
		if (lstrcmpi(lpszToken, _T("UnregServer"))==0)
		{
			_Module.UpdateRegistryFromResource(IDR_CASC_05, FALSE);
			_Module.UnregisterServer(TRUE); //TRUE means typelib is unreg'd
			bRun = FALSE;
			break;
		}
		if (lstrcmpi(lpszToken, _T("RegServer"))==0)
		{
			_Module.UpdateRegistryFromResource(IDR_CASC_05, TRUE);
			_Module.RegisterServer(TRUE);
			bRun = FALSE;
			break;
		}
		lpszToken = _Module.FindOneOf(lpszToken, szTokens);
	}

	if (!bRun)
	{
		m_bATLInited = FALSE;
		_Module.Term();
		CoUninitialize();
		return FALSE;
	}

	hRes = _Module.RegisterClassObjects(CLSCTX_LOCAL_SERVER, 
		REGCLS_MULTIPLEUSE);
	if (FAILED(hRes))
	{
		m_bATLInited = FALSE;
		CoUninitialize();
		return FALSE;
	}	

	return TRUE;

}

//DEL int CCASC_05App::Run() 
//DEL {
//DEL 	// TODO: Add your specialized code here and/or call the base class
//DEL 	
//DEL 	return CWinApp::Run();
//DEL }

//DEL void CCASC_05App::Serialize(CArchive& ar) 
//DEL {
//DEL 	if (ar.IsStoring())
//DEL 	{	// storing code
//DEL 	}
//DEL 	else
//DEL 	{	// loading code
//DEL 	}
//DEL }
