// Casc_04_sys.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_04_sys.h"
#include "Casc_041_sys_mech.h"
#include "Casc_042_sys_process.h"
#include "Casc_043_sys_soft.h"
#include "Casc_200_alarm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif
//·ÖÒ³
extern int   global_windows_num;
extern int	 global_mode;
/////////////////////////////////////////////////////////////////////////////
// CCasc_04_sys dialog


CCasc_04_sys::CCasc_04_sys(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_04_sys::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_04_sys)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void CCasc_04_sys::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_04_sys)
		// NOTE: the ClassWizard will add DDX and DDV calls here
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_04_sys, CDialog)
	//{{AFX_MSG_MAP(CCasc_04_sys)
	ON_BN_CLICKED(IDC_MECH, OnMech)
	ON_BN_CLICKED(IDC_PROCESS, OnProcess)
	ON_BN_CLICKED(IDC_SOFT, OnSoft)
	ON_BN_CLICKED(IDC_ALARM4, OnAlarm4)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_04_sys message handlers

void CCasc_04_sys::OnMech() 
{
	// TODO: Add your control notification handler code here
	CCasc_041_sys_mech sys_mech_041_window;
	//·ÖÒ³
	global_windows_num=41;
	sys_mech_041_window.DoModal();
}

void CCasc_04_sys::OnProcess() 
{
	// TODO: Add your control notification handler code here
	CCasc_042_sys_process sys_process_042_window;
	global_windows_num=42;
	sys_process_042_window.DoModal();
}

void CCasc_04_sys::OnSoft() 
{
	// TODO: Add your control notification handler code here
	CCasc_043_sys_soft sys_soft_043_window;
	//global_windows_num=43;
	sys_soft_043_window.DoModal();
}

void CCasc_04_sys::OnAlarm4() 
{
	// TODO: Add your control notification handler code here
	CCasc_200_alarm auto_200_alarm1;
	global_mode=ALARM_LIST;
	auto_200_alarm1.DoModal();
}
