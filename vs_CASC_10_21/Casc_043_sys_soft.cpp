// Casc_043_sys_soft.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_043_sys_soft.h"
#include "CASC_05Dlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CCasc_043_sys_soft dialog


CCasc_043_sys_soft::CCasc_043_sys_soft(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_043_sys_soft::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_043_sys_soft)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void CCasc_043_sys_soft::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_043_sys_soft)
		// NOTE: the ClassWizard will add DDX and DDV calls here
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_043_sys_soft, CDialog)
	//{{AFX_MSG_MAP(CCasc_043_sys_soft)
	ON_BN_CLICKED(IDC_SYS_SD_COMPUTER, OnSysSdComputer)
	ON_BN_CLICKED(IDC_SYS_windowsxp, OnSYSwindowsxp)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_043_sys_soft message handlers

void CCasc_043_sys_soft::OnSysSdComputer() 
{
	// TODO: Add your control notification handler code here
	if(MessageBox("确定关闭计算机？","帮助信息",MB_YESNO) == IDYES)
	{
		HANDLE hToken;
		TOKEN_PRIVILEGES tkp;
		OpenProcessToken(GetCurrentProcess(),
						TOKEN_ADJUST_PRIVILEGES | TOKEN_QUERY, &hToken);
		LookupPrivilegeValue(NULL, SE_SHUTDOWN_NAME,&tkp.Privileges[0].Luid); 
		tkp.PrivilegeCount = 1; 
		tkp.Privileges[0].Attributes = SE_PRIVILEGE_ENABLED;

		AdjustTokenPrivileges(hToken, FALSE, &tkp, 0,  (PTOKEN_PRIVILEGES)NULL, 0);
		ExitWindowsEx(EWX_SHUTDOWN,NULL);
	}
}

void CCasc_043_sys_soft::OnSYSwindowsxp() 
{
	// TODO: Add your control notification handler code here
	if(MessageBox("退出当前系统？","帮助信息",MB_YESNO) == IDYES)
	{
		//::AfxMessageBox("关闭");
		exit(0);
	}
}
