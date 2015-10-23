// Casc_02_auto.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_02_auto.h"
#include "Casc_021_auto.h"
#include "CASC_05Dlg.h"
#include "BmpProgressEx.h"
#include "Casc_200_alarm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

extern DWORD m_dwThreadId_Wr;
extern int global_opr_wr_rd;//写入与读取状态
extern float global_rot_spd_disp;//旋转速度显示
extern float global_torque_disp;//转矩显示
extern float global_slv_pos_disp;//slv实时位置显示
extern float global_pin_pos_disp;//pin实时位置显示
extern float global_weild_show_time;//焊接点暂存计数器
extern int   global_display_1;
extern int   global_display_2;
extern int   global_display_3;

extern int   global_display_6;
extern int   global_display_7;
extern int   global_display_8;
extern int   global_exe_sen_status;//自动用

extern CString global_recipe_name;
/////////////////////////////////////////////////////////////////////////////
// CCasc_02_auto dialog


CCasc_02_auto::CCasc_02_auto(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_02_auto::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_02_auto)
	m_auto_rot_spd_dis = 0.0f;
	m_auto_rot_spd_dis = 0.0f;
	m_auto_slv_dis = 0.0f;
	m_auto_pin_dis = 0.0f;
	m_weild_counter = 0.0f;
	m_auto_torque_dis = 0.0f;
	//}}AFX_DATA_INIT
}


void CCasc_02_auto::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_02_auto)
	DDX_Control(pDX, IDC_02_AUTO_8, m_auto_moni_8);
	DDX_Control(pDX, IDC_02_AUTO_7, m_auto_moni_7);
	DDX_Control(pDX, IDC_02_AUTO_6, m_auto_moni_6);
	DDX_Control(pDX, IDC_02_AUTO_3, m_auto_moni_3);
	DDX_Control(pDX, IDC_02_AUTO_2, m_auto_moni_2);
	DDX_Control(pDX, IDC_02_AUTO_1, m_auto_moni_1);

	DDX_Control(pDX, IDC_STATIC_02_AUTO, m_02_auto_slv_pin);
	DDX_Text(pDX, IDC_AUTO_ROT, m_auto_rot_spd_dis);
	DDX_Text(pDX, IDC_AUTO_TORQUE, m_auto_torque_dis);
	DDX_Text(pDX, IDC_EDIT_AUTO_PIN_DIS, m_auto_slv_dis);
	DDX_Text(pDX, IDC_EDIT_AUTO_SLV_DIS, m_auto_pin_dis);
	DDX_Text(pDX, IDC_WEILD_COUNTER, m_weild_counter);

	//wendy add 2015/10/21
	DDX_Text(pDX, IDC_RECIEPE_NAME1, m_recipe_name);
	//wendy add
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_02_auto, CDialog)
	//{{AFX_MSG_MAP(CCasc_02_auto)
	ON_BN_CLICKED(IDC_AUTO_MONITOR, OnAutoMonitor)
	ON_BN_CLICKED(IDC_AUTO_DR_OPEN, OnAutoDrOpen)
	ON_BN_CLICKED(IDC_AUTO_DR_CLOSE, OnAutoDrClose)
	ON_BN_CLICKED(IDC_AUTO_CANCLE, OnAutoCancle)
	ON_WM_TIMER()
	ON_BN_CLICKED(IDC_ALARM4, OnAlarm4)
	ON_BN_CLICKED(IDC_CNT_ZERO, OnCntZero)
	ON_EN_CHANGE(IDC_AUTO_ROT, OnEnChangeAutoRot)
	ON_EN_CHANGE(IDC_AUTO_TORQUE, OnEnChangeAutoTorque)
	ON_EN_CHANGE(IDC_WEILD_COUNTER, OnEnChangeWeildCounter)
	ON_EN_CHANGE(IDC_RECIEPE_NAME1, OnEnchangeRecipeName)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_02_auto message handlers

void CCasc_02_auto::OnAutoMonitor() 
{
	// TODO: Add your control notification handler code here
	CCasc_021_auto auto_monitor_021_window;
	auto_monitor_021_window.DoModal();
}

void CCasc_02_auto::OnOK() 
{
	// TODO: Add extra validation here
	KillTimer(1);
	KillTimer(2);
	KillTimer(3);
	global_opr_wr_rd=AUTO_BACK_MAIN;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUTO_MODE_END, NULL, NULL);
	CDialog::OnOK();
}

void CCasc_02_auto::OnAutoDrOpen() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUTO_DR_OPEN;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUTO_DR_OPEN, NULL, NULL);
}

void CCasc_02_auto::OnAutoDrClose() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUTO_DR_CLOSE;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUTO_DR_CLOSE, NULL, NULL);
}

void CCasc_02_auto::OnAutoCancle() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUTO_CANCLE;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUTO_CANCLE, NULL, NULL);
}


BOOL CCasc_02_auto::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	/*
	SetTimer(1,100,NULL);
	SetTimer(2,100,NULL);
	SetTimer(3,300,NULL);
	*/
	SetTimer(1,10,NULL);
	SetTimer(2,10,NULL);
	SetTimer(3,10,NULL);

	m_auto_rot_spd_dis=global_rot_spd_disp;//旋转显示
	m_auto_torque_dis = global_torque_disp;//转矩显示
	m_auto_slv_dis=global_slv_pos_disp;//slv实时显示
	m_auto_pin_dis=global_pin_pos_disp;//pin实时显示
	m_weild_counter=global_weild_show_time;//焊接点暂存计数器
	m_recipe_name = global_recipe_name;

	global_display_1=0;		//“C型架处于工作位置”信号
	global_display_2=0;		//“C型架处于导轨尾部”信号
	global_display_3=0;		//“气路压力传感器”信号
	global_display_6=0;		//
	global_display_7=0;
	global_display_8=0;

	hfront_1=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_1_1);
	hback_1=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_1_0);
	hfront_2=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_2_1);
	hback_2=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_2_0);
	hfront_3=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_3_1);
	hback_3=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_3_0);
	hfront_6=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_6_1);
	hback_6=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_6_0);
	hfront_7=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_7_1);
	hback_7=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_7_0);
	hfront_8=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_8_1);
	hback_8=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_8_0);
	UpdateData(FALSE);

	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CCasc_02_auto::OnTimer(UINT nIDEvent) 
{
	// TODO: Add your message handler code here and/or call default
	switch(nIDEvent)
 	{
 	case 1:{
 			m_auto_rot_spd_dis=global_rot_spd_disp;//旋转显示
			m_auto_torque_dis = global_torque_disp;//转矩显示
 			m_auto_slv_dis=global_slv_pos_disp;//slv实时显示
 			m_auto_pin_dis=global_pin_pos_disp;//pin实时显示
			m_weild_counter=global_weild_show_time;//焊接点暂存计数器
 			UpdateData(FALSE);
 			break;
 		   }
	case 2:{
		if(m_02_auto_slv_pin.GetPos() == 100)KillTimer(2);
			//增长进度条
			m_02_auto_slv_pin.StepIt();
		break;}
	case 3:{
		if(global_display_1==1){m_auto_moni_1.SetIcon(hfront_1);}
		if(global_display_1==0){m_auto_moni_1.SetIcon(hback_1);}
		if(global_display_2==1){m_auto_moni_2.SetIcon(hfront_2);}
		if(global_display_2==0){m_auto_moni_2.SetIcon(hback_2);}
		if(global_display_3==1){m_auto_moni_3.SetIcon(hfront_3);}
		if(global_display_3==0){m_auto_moni_3.SetIcon(hback_3);}
		if(global_display_6==1){m_auto_moni_6.SetIcon(hfront_6);}
		if(global_display_6==0){m_auto_moni_6.SetIcon(hback_6);}
		if(global_display_7==1){m_auto_moni_7.SetIcon(hfront_7);}
		if(global_display_7==0){m_auto_moni_7.SetIcon(hback_7);}
		if(global_display_8==1){m_auto_moni_8.SetIcon(hfront_8);}
		if(global_display_8==0){m_auto_moni_8.SetIcon(hback_8);}
		if(global_exe_sen_status==0){global_exe_sen_status=1;}
		else {global_exe_sen_status=0;}
		break;}
 	}
	CDialog::OnTimer(nIDEvent);
}

void CCasc_02_auto::OnAlarm4() 
{
	// TODO: Add your control notification handler code here
	CCasc_200_alarm auto_200_alarm4;
	auto_200_alarm4.DoModal();
}

void CCasc_02_auto::OnCntZero() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUTO_CNT_ZERO;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_CNT_ZERO, NULL, NULL);
}


void CCasc_02_auto::OnEnChangeAutoRot()
{

}


void CCasc_02_auto::OnEnChangeAutoTorque()
{

}


void CCasc_02_auto::OnEnChangeWeildCounter()
{

}

void CCasc_02_auto::OnEnchangeRecipeName()
{

}


