// Casc_01_jog.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_01_jog.h"
#include "Casc_011_jog.h"
#include "BmpProgressEx.h"
#include "BmpProgressEx_1.h"
#include "D_Jog_Btn_Slv_Up.h"
#include "D_Jog_Btn_Slv_Dn.h"
#include "D_Jog_Btn_Pin_Up.h"
#include "D_Jog_Btn_Pin_Dn.h"
#include "Casc_091_num_keyboard.h"
#include "CASC_05Dlg.h"
#include "BmpProgressEx_2.h"
#include "Casc_200_alarm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

extern DWORD m_dwThreadId_Wr;
extern float global_rot_spd_disp;//旋转速度显示
extern float global_pin_limit_dn;//pin下限位
extern float global_pin_limit_up;//pin上限位
extern float global_slv_limit_dn;//slv下限位
extern float global_slv_limit_up;//slv上限位
extern int   global_up_dn_lim_status;//pin&slv上下限位
extern float global_slv_pos_disp;//slv实时位置显示
extern float global_pin_pos_disp;//pin实时位置显示
extern int   global_slv_up_status;//slv上按钮状态
extern int   global_slv_dn_status;//slv下按钮状态
extern int   global_pin_up_status;//pin上按钮状态
extern int   global_pin_dn_status;//pin下按钮状态
extern int   global_pin_slv_btn_st;//pin&slv按钮状态
extern char  global_pin_obj[9];
extern char  global_slv_obj[9];
extern int   global_pin_obj_status;
extern int   global_slv_obj_status;
extern int   global_jog_rot_link;
extern int   global_jog_slv_link;
//分页
extern int   global_windows_num;
extern int   global_num_id;
extern int global_aux_axis_confirm;
/////////////////////////////////////////////////////////////////////////////
// CCasc_01_jog dialog


CCasc_01_jog::CCasc_01_jog(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_01_jog::IDD, pParent)
{
	m_jog_pin_dis = 0.0f;
	m_jog_slv_dis = 0.0f;
	m_rot_spd_dis = 0.0f;
	m_pin_limit_dn = 0.0f;
	m_pin_limit_up = 0.0f;
	m_jog_slv_limit_dn = 0.0f;
	m_jog_slv_limit_up = 0.0f;
	
}


void CCasc_01_jog::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_STATIC_01_JOG, m_01_jog_slv_pin);
	DDX_Control(pDX, IDC_JOG_PIN_UP1, m_jog_pin_up1);
	DDX_Control(pDX, IDC_JOG_PIN_DN1, m_jog_pin_dn1);
	DDX_Control(pDX, IDC_JOG_SLV_DN1, m_jog_slv_dn1);
	DDX_Control(pDX, IDC_JOG_SLV_UP1, m_jog_slv_up1);
	DDX_Text(pDX, IDC_EDIT_JOG_PIN_DIS, m_jog_pin_dis);
	DDX_Text(pDX, IDC_EDIT_JOG_SLV_DIS, m_jog_slv_dis);
	DDX_Text(pDX, IDC_EIDC_ROT_SPD_DIS, m_rot_spd_dis);
	DDX_Text(pDX, IDC_JOG_PIN_LIMIT_DN, m_pin_limit_dn);
	DDX_Text(pDX, IDC_JOG_PIN_LIMIT_UP, m_pin_limit_up);
	DDX_Text(pDX, IDC_JOG_SLV_LIMIT_DN, m_jog_slv_limit_dn);
	DDX_Text(pDX, IDC_JOG_SLV_LIMIT_UP, m_jog_slv_limit_up);
}


BEGIN_MESSAGE_MAP(CCasc_01_jog, CDialog)
	//{{AFX_MSG_MAP(CCasc_01_jog)
	ON_BN_CLICKED(IDC_JOG_MONITOR, OnJogMonitor)
	ON_EN_CHANGE(IDC_JOG_LIMIT_UP, OnChangeJogLimitUp)
	ON_WM_TIMER()
	ON_BN_CLICKED(IDC_TEST, OnTest)
	ON_EN_SETFOCUS(IDC_EIDC_ROT_SPD_SET, OnSetfocusEidcRotSpdSet)
	ON_EN_SETFOCUS(IDC_EIDC_SLV_POS_OBJ, OnSetfocusEidcSlvPosObj)
	ON_EN_SETFOCUS(IDC_EIDC_PIN_POS_OBJ, OnSetfocusEidcPinPosObj)
	ON_EN_SETFOCUS(IDC_EDIT_UP_DN_SPD, OnSetfocusEditUpDnSpd)
	ON_BN_CLICKED(IDC_JOG_ROT_START, OnJogRotStart)
	ON_WM_PAINT()
	ON_BN_CLICKED(IDC_ROT_LINK, OnRotLink)
	ON_BN_CLICKED(IDC_SLV_LINK, OnSlvLink)
	ON_BN_CLICKED(IDC_ALARM2, OnAlarm2)
	//}}AFX_MSG_MAP
	//ON_BN_CLICKED(IDC_JOG_ROT_START2, &CCasc_01_jog::OnBnClickedJogRotStart2)
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_01_jog message handlers

void CCasc_01_jog::OnJogMonitor() 
{
	// TODO: Add your control notification handler code here
	CCasc_011_jog jog_monitor_011_window;
	global_mode=JOG_MONITOR_AXIS;
	global_windows_num=11;//辅助功能
	jog_monitor_011_window.DoModal();
}

void CCasc_01_jog::OnChangeJogLimitUp() 
{
	
}


BOOL CCasc_01_jog::OnCommand(WPARAM wParam, LPARAM lParam) 
{
	// TODO: Add your specialized code here and/or call the base class
	
	return CDialog::OnCommand(wParam, lParam);
}
//pin&slv动画调用==================================================================
void CCasc_01_jog::OnTimer(UINT nIDEvent) 
{
	// TODO: Add your message handler code here and/or call default
	//如果进度条到达最大值，关闭定时器
	switch(nIDEvent)
	{
	case 1:{
			if(m_01_jog_slv_pin.GetPos() == 100)KillTimer(1);
			m_01_jog_slv_pin.StepIt();
			break;
		   }
	case 2:{
			m_rot_spd_dis=global_rot_spd_disp;//旋转显示
			m_pin_limit_dn=global_pin_limit_dn;//pin下限位
			m_pin_limit_up=global_pin_limit_up;//pin上限位
			m_jog_slv_limit_dn=global_slv_limit_dn;//slv下限位
			m_jog_slv_limit_up=global_slv_limit_up;//slv上限位
			m_jog_slv_dis=global_slv_pos_disp;//slv实时显示
			m_jog_pin_dis=global_pin_pos_disp;//pin实时显示
			UpdateData(FALSE);
			break;
		   }
	}
	CDialog::OnTimer(nIDEvent);
}

void CCasc_01_jog::OnTest() 
{
	// TODO: Add your control notification handler code here
	//设置定时器
	//SetTimer(1, 100, NULL);
}
//=================================================================================
//主旋转
void CCasc_01_jog::OnSetfocusEidcRotSpdSet() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_01_jog m_jog_dlg;
	global_num_id=11;//1为手动，4为进给
	HWND hwnd=m_jog_dlg.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	CCASC_05Dlg jog_dlg;
	num_keyboard.DoModal();
	z_mEdit=(CEdit *)GetDlgItem(IDC_EIDC_ROT_SPD_SET);
	z_mEdit->SetWindowText(test);
	global_opr_num_key=JOG_ROT_SPD_SET;
	jog_dlg.Char_To_Float();
	//jog_dlg.Msg_WR();
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_ROT_SPD_SET, NULL, NULL);
}
//套目标位置
void CCasc_01_jog::OnSetfocusEidcSlvPosObj() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_01_jog m_jog_dlg;
	global_num_id=13;//1为手动，4为进给
	HWND hwnd=m_jog_dlg.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	CCASC_05Dlg jog_dlg;
	num_keyboard.DoModal();
	z_mEdit=(CEdit *)GetDlgItem(IDC_EIDC_SLV_POS_OBJ);
	z_mEdit->SetWindowText(test);
	global_opr_num_key=JOG_SLV_POS_SET;
	jog_dlg.Char_To_Float();
	//jog_dlg.Msg_WR();
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_SLV_POS_SET, NULL, NULL);
}
//针目标位置
void CCasc_01_jog::OnSetfocusEidcPinPosObj() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_01_jog m_jog_dlg;
	global_num_id=12;//1为手动，4为进给
	HWND hwnd=m_jog_dlg.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	CCASC_05Dlg jog_dlg;
	num_keyboard.DoModal();
	z_mEdit=(CEdit *)GetDlgItem(IDC_EIDC_PIN_POS_OBJ);
	z_mEdit->SetWindowText(test);
	global_opr_num_key=JOG_PIN_POS_SET;
	jog_dlg.Char_To_Float();
	//jog_dlg.Msg_WR();
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_PIN_POS_SET, NULL, NULL);
}
//搅拌针套进给量设计
void CCasc_01_jog::OnSetfocusEditUpDnSpd() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_01_jog m_jog_dlg;
	global_num_id=14;//1为手动，4为进给
	HWND hwnd=m_jog_dlg.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	CCASC_05Dlg jog_dlg;
	num_keyboard.DoModal();
	z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_UP_DN_SPD);
	z_mEdit->SetWindowText(test);
	global_opr_num_key=JOG_PIN_SLV_UD_SET;
	jog_dlg.Char_To_Float();
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_PIN_SLV_UD_SET, NULL, NULL);
}

void CCasc_01_jog::OnJogRotStart() 
{
	// TODO: Add your control notification handler code here
	CCASC_05Dlg dlg;
	global_opr_wr_rd=JOG_ROT_START;
	if(global_jog_rot_status==0&&global_jog_rot_status_2==0)
	{
		global_jog_rot_status=1;//打开主轴旋转
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_ROT_START, NULL, NULL);
		//dlg.Msg_WR();
	}
	else if(global_jog_rot_status_2 == 0)
	{
		global_jog_rot_status=0;//关闭主轴旋转
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_ROT_START, NULL, NULL);
		//dlg.Msg_WR();
	}
}


void CCasc_01_jog::OnPaint() 
{
	CPaintDC dc(this); // device context for painting
	
}

BOOL CCasc_01_jog::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	//global_pin_limit_dn=19.2F;
	CEdit * pin_mEdit;
	CEdit * slv_mEdit;
	CEdit * ud_mEdit;
	CEdit * rot_mEdit;
	global_opr_wr_rd=MAIN_JOG_MODE;
	//CCASC_05Dlg dlg;
	//dlg.Msg_WR();
	pin_mEdit=(CEdit *)GetDlgItem(IDC_EIDC_PIN_POS_OBJ);
	pin_mEdit->SetWindowText("0");
	slv_mEdit=(CEdit *)GetDlgItem(IDC_EIDC_SLV_POS_OBJ);
	slv_mEdit->SetWindowText("0");
	ud_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_UP_DN_SPD);
	ud_mEdit->SetWindowText("10");
	rot_mEdit=(CEdit *)GetDlgItem(IDC_EIDC_ROT_SPD_SET);
	rot_mEdit->SetWindowText("0");
	//手动数据初始显示
	SetTimer(2,100,NULL);
	m_rot_spd_dis=global_rot_spd_disp;//旋转显示
	m_pin_limit_dn=global_pin_limit_dn;//pin下限位
	m_pin_limit_up=global_pin_limit_up;//pin上限位
	m_jog_slv_limit_dn=global_slv_limit_dn;//slv下限位
	m_jog_slv_limit_up=global_slv_limit_up;//slv上限位
	m_jog_slv_dis=global_slv_pos_disp;//slv实时显示
	m_jog_pin_dis=global_pin_pos_disp;//pin实时显示
	UpdateData(FALSE);
	//手动针套上下运动
	//创建图像列表
	m_images_slv_up.Create(86, 76, ILC_COLOR24 | ILC_MASK, 1, 0);
	m_images_slv_dn.Create(86, 76, ILC_COLOR24 | ILC_MASK, 1, 0);
	m_images_pin_up.Create(86, 76, ILC_COLOR24 | ILC_MASK, 1, 0);
	m_images_pin_dn.Create(86, 76, ILC_COLOR24 | ILC_MASK, 1, 0);

	m_images_slv_up.Add(AfxGetApp()->LoadIcon(IDI_SLV_UP)); //加载图标
	m_images_slv_dn.Add(AfxGetApp()->LoadIcon(IDI_SLV_DN));
	m_images_pin_up.Add(AfxGetApp()->LoadIcon(IDI_SLV_UP));
	m_images_pin_dn.Add(AfxGetApp()->LoadIcon(IDI_SLV_DN));
	
	m_jog_slv_up1.SetImageList(&m_images_slv_up);				//设置图像列表
	m_jog_slv_dn1.SetImageList(&m_images_slv_dn);
	m_jog_pin_up1.SetImageList(&m_images_pin_up);
	m_jog_pin_dn1.SetImageList(&m_images_pin_dn);
	
	//设置按钮显示的图像索引
	m_jog_slv_up1.SetImageIndex(0);
	m_jog_slv_dn1.SetImageIndex(0);
	m_jog_pin_up1.SetImageIndex(0);
	m_jog_pin_dn1.SetImageIndex(0);

	SetTimer(1,200,NULL);

	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CCasc_01_jog::OnOK() 
{
	// TODO: Add extra validation here
	KillTimer(1);
	KillTimer(2);
	global_aux_axis_confirm=0;
	global_opr_wr_rd=JOG_BACK_MAIN;
	global_mode=ALARM_LIST;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_MODE_END, NULL, NULL);
	CDialog::OnOK();
}

void CCasc_01_jog::OnRotLink() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=JOG_ROT_LINK;
	if(global_jog_rot_link==0)
	{
		global_jog_rot_link=1;//打开主轴旋转
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_ROT_LINK, NULL, NULL);
		//dlg.Msg_WR();
	}
	else
	{
		global_jog_rot_link=0;//关闭主轴旋转
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_ROT_LINK, NULL, NULL);
		//dlg.Msg_WR();
	}
}

void CCasc_01_jog::OnSlvLink() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=JOG_SLV_LINK;
	if(global_jog_slv_link==0)
	{
		global_jog_slv_link=1;//打开主轴旋转
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_SLV_LINK, NULL, NULL);
		//dlg.Msg_WR();
	}
	else
	{
		global_jog_slv_link=0;//关闭主轴旋转
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_SLV_LINK, NULL, NULL);
		//dlg.Msg_WR();
	}
}

void CCasc_01_jog::OnAlarm2() 
{
	// TODO: Add your control notification handler code here
	CCasc_200_alarm auto_200_alarm2;
	global_mode=ALARM_LIST;
	auto_200_alarm2.DoModal();
	//auto_200_alarm2.FreshAlarm();
}


void CCasc_01_jog::OnBnClickedJogRotStart2()
{
	// TODO: Add your control notification handler code here
	// TODO: Add your control notification handler code here
	CCASC_05Dlg dlg;
	global_opr_wr_rd=JOG_ROT_START_2;
	printf("hello");
	if(global_jog_rot_status_2==0 && global_jog_rot_status == 0)
	{
		global_jog_rot_status_2=1;//打开主轴旋转
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_ROT_START_2, NULL, NULL);
		//dlg.Msg_WR();
	}
	else if(global_jog_rot_status == 0)
	{
		global_jog_rot_status_2=0;//关闭主轴旋转
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_ROT_START_2, NULL, NULL);
	}
}
