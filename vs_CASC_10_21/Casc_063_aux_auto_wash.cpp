// Casc_063_aux_auto_wash.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_063_aux_auto_wash.h"
#include "CASC_05Dlg.h"
#include "Casc_200_alarm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CCasc_063_aux_auto_wash dialog
extern float global_rot_spd_disp;//旋转速度显示
extern float global_slv_pos_disp;//slv实时位置显示
extern float global_pin_pos_disp;//pin实时位置显示
extern DWORD m_dwThreadId_Wr;
extern int global_opr_wr_rd;//写入与读取状态

CCasc_063_aux_auto_wash::CCasc_063_aux_auto_wash(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_063_aux_auto_wash::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_063_aux_auto_wash)
	m_aux_pin_dis = 0.0f;
	m_aux_slv_dis = 0.0f;
	m_aux_rot_spd_dis = 0.0f;
	//}}AFX_DATA_INIT
}


void CCasc_063_aux_auto_wash::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_063_aux_auto_wash)
	DDX_Text(pDX, IDC_EDIT_AUX_PIN_DIS, m_aux_pin_dis);
	DDX_Text(pDX, IDC_EDIT_AUX_SLV_DIS, m_aux_slv_dis);
	DDX_Text(pDX, IDC_AUX_ROT, m_aux_rot_spd_dis);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_063_aux_auto_wash, CDialog)
	//{{AFX_MSG_MAP(CCasc_063_aux_auto_wash)
	ON_BN_CLICKED(IDC_AUX_CLEAR1, OnAuxClear1)
	ON_BN_CLICKED(IDC_AUX_CLEAR2, OnAuxClear2)
	ON_BN_CLICKED(IDC_AUX_FINISH, OnAuxFinish)
	ON_WM_TIMER()
	ON_BN_CLICKED(IDC_ALARM63, OnAlarm63)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_063_aux_auto_wash message handlers

void CCasc_063_aux_auto_wash::OnAuxClear1() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUX_CLEAR1;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_CLEAR1, NULL, NULL);
}

void CCasc_063_aux_auto_wash::OnAuxClear2() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUX_CLEAR2;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_CLEAR2, NULL, NULL);
}

void CCasc_063_aux_auto_wash::OnAuxFinish() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUX_FINI;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_FINI, NULL, NULL);
}

void CCasc_063_aux_auto_wash::OnOK() 
{
	// TODO: Add extra validation here
	KillTimer(4);
	global_opr_wr_rd=AUX_FINI;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_FINI, NULL, NULL);
	CDialog::OnOK();
}

//DEL void CCasc_063_aux_auto_wash::OnTimer(UINT nIDEvent) 
//DEL {
//DEL 	// TODO: Add your message handler code here and/or call default
//DEL 	switch(nIDEvent)
//DEL 	{
//DEL 	case 1:{
//DEL 	//		m_aux_rot_spd_dis=global_rot_spd_disp;//旋转显示
//DEL 	//		m_aux_slv_dis=global_slv_pos_disp;//slv实时显示
//DEL 	//		m_aux_pin_dis=global_pin_pos_disp;//pin实时显示
//DEL 	//		UpdateData(FALSE);
//DEL 			break;
//DEL 		   }
//DEL 	default:{break;}
//DEL 	CDialog::OnTimer(nIDEvent);
//DEL }
//DEL 
//DEL //BOOL CCasc_063_aux_auto_wash::OnInitDialog() 
//DEL //{
//DEL //	CDialog::OnInitDialog();
//DEL 	
//DEL 	// TODO: Add extra initialization here
//DEL //	SetTimer(1,100,NULL);
//DEL //	m_aux_rot_spd_dis=global_rot_spd_disp;//旋转显示
//DEL //	m_aux_slv_dis=global_slv_pos_disp;//slv实时显示
//DEL //	m_aux_pin_dis=global_pin_pos_disp;//pin实时显示
//DEL //	UpdateData(FALSE);
//DEL //	return TRUE;  // return TRUE unless you set the focus to a control
//DEL 	              // EXCEPTION: OCX Property Pages should return FALSE
//DEL //}
//DEL //
//DEL 

void CCasc_063_aux_auto_wash::OnTimer(UINT nIDEvent) 
{
	// TODO: Add your message handler code here and/or call default
	switch(nIDEvent)
 	{
 	case 4:{
 			m_aux_rot_spd_dis=global_rot_spd_disp;//旋转显示
 			m_aux_slv_dis=global_slv_pos_disp;//slv实时显示
 			m_aux_pin_dis=global_pin_pos_disp;//pin实时显示
 			UpdateData(FALSE);
 			break;
 		   }
	}
	CDialog::OnTimer(nIDEvent);
}

BOOL CCasc_063_aux_auto_wash::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	SetTimer(4,100,NULL);
	m_aux_rot_spd_dis=global_rot_spd_disp;//旋转显示
	m_aux_slv_dis=global_slv_pos_disp;//slv实时显示
	m_aux_pin_dis=global_pin_pos_disp;//pin实时显示
	UpdateData(FALSE);
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CCasc_063_aux_auto_wash::OnAlarm63() 
{
	// TODO: Add your control notification handler code here
	CCasc_200_alarm auto_200_alarm1;
	global_mode=ALARM_LIST;
	auto_200_alarm1.DoModal();
}
