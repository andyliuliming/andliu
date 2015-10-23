// Casc_042_sys_process.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_042_sys_process.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CCasc_042_sys_process dialog


CCasc_042_sys_process::CCasc_042_sys_process(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_042_sys_process::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_042_sys_process)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void CCasc_042_sys_process::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_042_sys_process)
		// NOTE: the ClassWizard will add DDX and DDV calls here
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_042_sys_process, CDialog)
	//{{AFX_MSG_MAP(CCasc_042_sys_process)
		// NOTE: the ClassWizard will add message map macros here
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_042_sys_process message handlers
