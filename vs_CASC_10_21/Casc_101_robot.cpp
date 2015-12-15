// Casc_101_robot.cpp : implementation file
//

#include "stdafx.h"
#include "casc_05.h"
#include "Casc_101_robot.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CCasc_101_robot dialog


CCasc_101_robot::CCasc_101_robot(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_101_robot::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_101_robot)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void CCasc_101_robot::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_101_robot)
		// NOTE: the ClassWizard will add DDX and DDV calls here
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_101_robot, CDialog)
	//{{AFX_MSG_MAP(CCasc_101_robot)
		// NOTE: the ClassWizard will add message map macros here
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_101_robot message handlers
