// Casc_061_aux_auto_axis.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_061_aux_auto_axis.h"
#include "Casc_011_jog.h"
#include "Casc_06_aux.h"



#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif
extern DWORD m_dwThreadId_Wr;
extern int global_opr_wr_rd;//写入与读取状态
extern int global_aux_axis_confirm;
extern int   global_mode;
extern float global_rot_spd_disp;//旋转速度显示
extern float global_slv_pos_disp;//slv实时位置显示
extern float global_pin_pos_disp;//pin实时位置显示
extern float global_slv_spd_disp;//slv实时速度显示
extern float global_pin_spd_disp;//pin实时速度显示
extern int   global_align_slv_s;
extern int   global_align_slv_f;
extern int   global_align_pin_s;
extern int   global_align_pin_f;
/////////////////////////////////////////////////////////////////////////////
// CCasc_061_aux_auto_axis dialog


CCasc_061_aux_auto_axis::CCasc_061_aux_auto_axis(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_061_aux_auto_axis::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_061_aux_auto_axis)
	m_align_rot = 0.0f;
	m_align_pin_pos = 0.0f;
	m_align_slv_pos = 0.0f;
	m_align_pin_spd = 0.0f;
	m_align_slv_spd = 0.0f;
	//}}AFX_DATA_INIT
}


void CCasc_061_aux_auto_axis::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_061_aux_auto_axis)
	DDX_Control(pDX, IDC_STATIC_SLV_S, m_led_slv_s);
	DDX_Control(pDX, IDC_STATIC_SLV_F, m_led_slv_f);
	DDX_Control(pDX, IDC_STATIC_PIN_S, m_led_pin_s);
	DDX_Control(pDX, IDC_STATIC_PIN_F, m_led_pin_f);
	DDX_Text(pDX, IDC_AUX_ROT, m_align_rot);
	DDX_Text(pDX, IDC_EDIT_AUX_PIN_DIS, m_align_pin_pos);
	DDX_Text(pDX, IDC_EDIT_AUX_SLV_DIS, m_align_slv_pos);
	DDX_Text(pDX, IDC_EDIT_AUX_PIN_GIVE, m_align_pin_spd);
	DDX_Text(pDX, IDC_EDIT_AUX_SLV_GIVE, m_align_slv_spd);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_061_aux_auto_axis, CDialog)
	//{{AFX_MSG_MAP(CCasc_061_aux_auto_axis)
	ON_BN_CLICKED(IDC_AUX_ALIGN_CONFIRM, OnAuxAlignConfirm)
	ON_BN_CLICKED(IDC_AUX_ALIGN_START, OnAuxAlignStart)
	ON_WM_TIMER()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_061_aux_auto_axis message handlers

void CCasc_061_aux_auto_axis::OnAuxAlignConfirm() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUX_ALIGN_CONFIRM;
	//global_aux_axis_confirm=1;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_ALIGN_CONFIRM, NULL, NULL);
	CCasc_011_jog jog_monitor_011_window;
	global_mode=JOG_MONITOR_AXIS;
	KillTimer(1);
	jog_monitor_011_window.DoModal();
	CDialog::OnOK();
}

void CCasc_061_aux_auto_axis::OnAuxAlignStart() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUX_ALIGN_START;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_ALIGN_START, NULL, NULL);
}

void CCasc_061_aux_auto_axis::OnOK() 
{
	// TODO: Add extra validation here
	global_opr_wr_rd=AUX_ALIGN_BACK;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_ALIGN_BACK, NULL, NULL);
	KillTimer(1);
	CDialog::OnOK();
}

BOOL CCasc_061_aux_auto_axis::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	SetTimer(1,100,NULL);
	m_align_rot=global_rot_spd_disp;//旋转显示
	m_align_slv_pos=global_slv_pos_disp;//slv实时显示
	m_align_pin_pos=global_pin_pos_disp;//pin实时显示
	m_align_slv_spd=global_slv_spd_disp;//slv实时显示
	m_align_pin_spd=global_pin_spd_disp;//pin实时显示
	
	hback_slv_s=::AfxGetApp()->LoadIcon(IDI_ICON_061_SLV_S_0);
	hfront_slv_s=::AfxGetApp()->LoadIcon(IDI_ICON_061_SLV_S_1);
	hback_slv_f=::AfxGetApp()->LoadIcon(IDI_ICON_061_SLV_F_0);
	hfront_slv_f=::AfxGetApp()->LoadIcon(IDI_ICON_061_SLV_F_1);
	hback_pin_s=::AfxGetApp()->LoadIcon(IDI_ICON_061_PIN_S_0);
	hfront_pin_s=::AfxGetApp()->LoadIcon(IDI_ICON_061_PIN_S_1);
	hback_pin_f=::AfxGetApp()->LoadIcon(IDI_ICON_061_PIN_F_0);
	hfront_pin_f=::AfxGetApp()->LoadIcon(IDI_ICON_061_PIN_F_1);
	
	UpdateData(FALSE);
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CCasc_061_aux_auto_axis::OnTimer(UINT nIDEvent) 
{
	// TODO: Add your message handler code here and/or call default
	switch(nIDEvent)
 	{
 	case 1:{
 			m_align_rot=global_rot_spd_disp;//旋转显示
			m_align_slv_pos=global_slv_pos_disp;//slv实时显示
			m_align_pin_pos=global_pin_pos_disp;//pin实时显示
			m_align_slv_spd=global_slv_spd_disp;//slv实时显示
			m_align_pin_spd=global_pin_spd_disp;//pin实时显示
			if(global_align_slv_s==1){m_led_slv_s.SetIcon(hfront_slv_s);}
			if(global_align_slv_s==0){m_led_slv_s.SetIcon(hback_slv_s);}
			if(global_align_slv_f==1){m_led_slv_f.SetIcon(hfront_slv_f);}
			if(global_align_slv_f==0){m_led_slv_f.SetIcon(hback_slv_f);}
			if(global_align_pin_s==1){m_led_pin_s.SetIcon(hfront_pin_s);}
			if(global_align_pin_s==0){m_led_pin_s.SetIcon(hback_pin_s);}
			if(global_align_pin_f==1){m_led_pin_f.SetIcon(hfront_pin_f);}
			if(global_align_pin_f==0){m_led_pin_f.SetIcon(hback_pin_f);}
 			UpdateData(FALSE);
			/*
			if(global_aux_axis_confirm==1)
			{
				global_aux_axis_confirm=0;
				KillTimer(4);
				CDialog::OnOK();
				jog_01_window.DoModal();
			}
			*/
 			break;
 		   }
	}
	CDialog::OnTimer(nIDEvent);
}
