// Casc_06_aux.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_06_aux.h"
#include "Casc_061_aux_auto_axis.h"
#include "Casc_062_aux_set_axis.h"
#include "Casc_063_aux_auto_wash.h"
#include "CASC_05Dlg.h"
#include "Casc_01_jog.h"
#include "Casc_200_alarm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CCasc_06_aux dialog
extern int   global_mode;
extern int   global_opr_wr_rd;
extern float global_rot_spd_disp;//旋转速度显示
extern float global_slv_pos_disp;//slv实时位置显示
extern float global_pin_pos_disp;//pin实时位置显示
extern DWORD m_dwThreadId_Wr;
extern int	 global_opr_wr_rd;//写入与读取状态
extern int	 global_aux_axis_confirm;
extern int	 global_mode;
extern int   global_windows_num;
CCasc_06_aux::CCasc_06_aux(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_06_aux::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_06_aux)
	m_aux_rot_spd_dis = 0.0f;
	m_aux_pin_dis = 0.0f;
	m_aux_slv_dis = 0.0f;
	//}}AFX_DATA_INIT
}


void CCasc_06_aux::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_06_aux)
	DDX_Text(pDX, IDC_AUX_ROT, m_aux_rot_spd_dis);
	DDX_Text(pDX, IDC_EDIT_AUX_PIN_DIS, m_aux_pin_dis);
	DDX_Text(pDX, IDC_EDIT_AUX_SLV_DIS, m_aux_slv_dis);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_06_aux, CDialog)
	//{{AFX_MSG_MAP(CCasc_06_aux)
	ON_BN_CLICKED(IDC_AUX_AUTO_AXIS, OnAuxAutoAxis)
	ON_BN_CLICKED(IDC_AUX_SET_AXIS, OnAuxSetAxis)
	ON_BN_CLICKED(IDC_AUX_AUTO_WASH, OnAuxAutoWash)
	ON_WM_TIMER()
	ON_BN_CLICKED(IDC_ALARM_6, OnAlarm6)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_06_aux message handlers

void CCasc_06_aux::OnAuxAutoAxis() 
{
	// TODO: Add your control notification handler code here
	CCasc_061_aux_auto_axis aux_auto_axis_061_window;
	global_opr_wr_rd=AUX_ALIGN_ENTER;
	global_mode = AUX_ALIGN_ENTER;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_ALIGN_ENTER, NULL, NULL);
	aux_auto_axis_061_window.DoModal();
}

void CCasc_06_aux::OnAuxSetAxis() 
{
	// TODO: Add your control notification handler code here
	CCasc_062_aux_set_axis aux_set_axis_062_window;
	global_mode = AUX_HOME_START;
	aux_set_axis_062_window.DoModal();
}

void CCasc_06_aux::OnAuxAutoWash() 
{
	// TODO: Add your control notification handler code here
	CCasc_063_aux_auto_wash aux_auto_wash_063_window;
	//global_opr_wr_rd=AUX_CLEAR;
	global_mode=AUX_CLEAR;
	global_windows_num=63;//辅助功能
	aux_auto_wash_063_window.DoModal();
}

BOOL CCasc_06_aux::OnInitDialog() 
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

void CCasc_06_aux::OnTimer(UINT nIDEvent) 
{
	// TODO: Add your message handler code here and/or call default
	CCasc_01_jog jog_01_window;
	switch(nIDEvent)
 	{
 	case 4:{
 			m_aux_rot_spd_dis=global_rot_spd_disp;//旋转显示
 			m_aux_slv_dis=global_slv_pos_disp;//slv实时显示
 			m_aux_pin_dis=global_pin_pos_disp;//pin实时显示
 			UpdateData(FALSE);
			if(global_aux_axis_confirm==1)
			{
				global_aux_axis_confirm=0;
				KillTimer(4);
				CDialog::OnOK();
				jog_01_window.DoModal();
			}
 			break;
 		   }
	}
	CDialog::OnTimer(nIDEvent);
}

void CCasc_06_aux::OnOK() 
{
	// TODO: Add extra validation here
	KillTimer(4);
	CDialog::OnOK();
}

//DEL void CCasc_06_aux::OnPaint() 
//DEL {
//DEL 	CPaintDC dc(this); // device context for painting
//DEL 	
//DEL 	// TODO: Add your message handler code here
//DEL 	
//DEL 	// Do not call CDialog::OnPaint() for painting messages
//DEL }

void CCasc_06_aux::OnAlarm6() 
{
	// TODO: Add your control notification handler code here
	CCasc_200_alarm auto_200_alarm1;
	global_mode=ALARM_LIST;
	auto_200_alarm1.DoModal();
}
