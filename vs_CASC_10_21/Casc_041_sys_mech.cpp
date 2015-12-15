// Casc_041_sys_mech.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_041_sys_mech.h"
#include "CASC_05Dlg.h"
#include "Casc_091_num_keyboard.h"
#include "Casc_200_alarm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CCasc_041_sys_mech dialog


CCasc_041_sys_mech::CCasc_041_sys_mech(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_041_sys_mech::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_041_sys_mech)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void CCasc_041_sys_mech::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_041_sys_mech)
		// NOTE: the ClassWizard will add DDX and DDV calls here
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_041_sys_mech, CDialog)
	//{{AFX_MSG_MAP(CCasc_041_sys_mech)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_DIAMTER, OnSetfocusEditPinDiamter)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_DIAMETER, OnSetfocusEditSlvDiameter)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_CUR_LIM, OnSetfocusEditRotCurLim)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_CUR_LIM, OnSetfocusEditPinCurLim)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_CUR_LIM, OnSetfocusEditSlvCurLim)
	ON_BN_CLICKED(IDC_ALARM41, OnAlarm41)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_041_sys_mech message handlers

void CCasc_041_sys_mech::OnSetfocusEditPinDiamter() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_041_sys_mech m_sys_mech;
	HWND hwnd=m_sys_mech.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	CCASC_05Dlg sys_dlg;
	num_keyboard.DoModal();
	z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_DIAMTER);
	z_mEdit->SetWindowText(test);
	//global_opr_num_key=JOG_PIN_SLV_UD_SET;
	sys_dlg.Char_To_Float();
	//PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_PIN_SLV_UD_SET, NULL, NULL);
}

void CCasc_041_sys_mech::OnSetfocusEditSlvDiameter() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_041_sys_mech m_sys_mech;
	HWND hwnd=m_sys_mech.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	CCASC_05Dlg sys_dlg;
	num_keyboard.DoModal();
	z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_DIAMETER);
	z_mEdit->SetWindowText(test);
	//global_opr_num_key=JOG_PIN_SLV_UD_SET;
	sys_dlg.Char_To_Float();
}

void CCasc_041_sys_mech::OnSetfocusEditRotCurLim() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_041_sys_mech m_sys_mech;
	HWND hwnd=m_sys_mech.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	CCASC_05Dlg sys_dlg;
	num_keyboard.DoModal();
	z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_CUR_LIM);
	z_mEdit->SetWindowText(test);
	//global_opr_num_key=JOG_PIN_SLV_UD_SET;
	sys_dlg.Char_To_Float();
}

void CCasc_041_sys_mech::OnSetfocusEditPinCurLim() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_041_sys_mech m_sys_mech;
	HWND hwnd=m_sys_mech.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	CCASC_05Dlg sys_dlg;
	num_keyboard.DoModal();
	z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_CUR_LIM);
	z_mEdit->SetWindowText(test);
	//global_opr_num_key=JOG_PIN_SLV_UD_SET;
	sys_dlg.Char_To_Float();
}

void CCasc_041_sys_mech::OnSetfocusEditSlvCurLim() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_041_sys_mech m_sys_mech;
	HWND hwnd=m_sys_mech.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	CCASC_05Dlg sys_dlg;
	num_keyboard.DoModal();
	z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_CUR_LIM);
	z_mEdit->SetWindowText(test);
	//global_opr_num_key=JOG_PIN_SLV_UD_SET;
	sys_dlg.Char_To_Float();
}

void CCasc_041_sys_mech::OnAlarm41() 
{
	// TODO: Add your control notification handler code here
	CCasc_200_alarm auto_200_alarm1;
	global_mode=ALARM_LIST;
	auto_200_alarm1.DoModal();
}
