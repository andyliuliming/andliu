// Casc_011_jog.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_011_jog.h"
#include "CASC_05Dlg.h"
#include "BmpProgressEx.h"
#include "Casc_200_alarm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

extern DWORD m_dwThreadId_Wr;
extern int global_jog_axis_status;
extern int global_aux_axis_confirm;
extern float global_slv_pos_disp;//slv实时位置显示
extern float global_pin_pos_disp;//pin实时位置显示
extern float global_pin_axis_set;
extern float global_slv_axis_set;
extern int   global_display_1;
extern int   global_display_2;
extern int   global_display_3;
extern int   global_display_4;
extern int   global_display_5;
extern int   global_display_6;
extern int   global_display_7;
extern int   global_display_8;
extern int   global_up_dn_lim_status;
/////////////////////////////////////////////////////////////////////////////
// CCasc_011_jog dialog


CCasc_011_jog::CCasc_011_jog(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_011_jog::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_011_jog)
	m_pin_dis = 0.0f;
	m_slv_dis = 0.0f;
	m_pin_axis_set = 0.0f;
	m_slv_axis_set = 0.0f;
	//}}AFX_DATA_INIT
}


void CCasc_011_jog::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_011_jog)
	DDX_Control(pDX, IDC_STATIC_011_JOG, m_011_jog_slv_pin);
	DDX_Control(pDX, IDC_011_JOG_8, m_jog_moni_8);
	DDX_Control(pDX, IDC_011_JOG_7, m_jog_moni_7);
	DDX_Control(pDX, IDC_011_JOG_6, m_jog_moni_6);
	DDX_Control(pDX, IDC_011_JOG_5, m_jog_moni_5);
	DDX_Control(pDX, IDC_011_JOG_4, m_jog_moni_4);
	DDX_Control(pDX, IDC_011_JOG_3, m_jog_moni_3);
	DDX_Control(pDX, IDC_011_JOG_2, m_jog_moni_2);
	DDX_Control(pDX, IDC_011_JOG_1, m_jog_moni_1);
	DDX_Text(pDX, IDC_EDIT_PIN_DIS, m_pin_dis);
	DDX_Text(pDX, IDC_EDIT_SLV_DIS, m_slv_dis);
	DDX_Text(pDX, IDC_EDIT_PIN_AXIS_SET, m_pin_axis_set);
	DDX_Text(pDX, IDC_EDIT_SLV_AXIS_SET, m_slv_axis_set);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_011_jog, CDialog)
	//{{AFX_MSG_MAP(CCasc_011_jog)
	ON_BN_CLICKED(IDC_BUTTON_JOG_BRK_OPEN, OnButtonJogBrkOpen)
	ON_BN_CLICKED(IDC_BUTTON_JOG_COL_OPEN, OnButtonJogColOpen)
	ON_BN_CLICKED(IDC_BUTTON_JOG_GAS_OPEN, OnButtonJogGasOpen)
	ON_BN_CLICKED(IDC_BUTTON_CNT_CLR, OnButtonCntClr)
	ON_BN_CLICKED(IDC_AXIS_ACTIVE, OnAxisActive)
	ON_WM_TIMER()
	ON_BN_CLICKED(IDC_ALARM3, OnAlarm3)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_011_jog message handlers
//制动刹车打开
void CCasc_011_jog::OnButtonJogBrkOpen() 
{
	// TODO: Add your control notification handler code here
	//CCASC_05Dlg dlg;
	global_opr_wr_rd=JOG_BRK_OPEN;
	if(global_jog_brk_status==0)
	{
		global_jog_brk_status=1;//打开制动刹车
		
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_BRK_OPEN, NULL, NULL);
		//dlg.Msg_WR();
	}
	else
	{
		global_jog_brk_status=0;//关闭制动刹车
		
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_BRK_OPEN, NULL, NULL);
		//dlg.Msg_WR();
	}
}
//冷却气打开
void CCasc_011_jog::OnButtonJogColOpen() 
{
	// TODO: Add your control notification handler code here
	//CCASC_05Dlg dlg;
	global_opr_wr_rd=JOG_COL_OPEN;
	if(global_jog_col_status==0)
	{
		global_jog_col_status=1;//打开冷却气
				
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_COL_OPEN, NULL, NULL);
		//dlg.Msg_WR();
	}
	else
	{
		global_jog_col_status=0;//关闭冷却气
		
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_COL_OPEN, NULL, NULL);
		//dlg.Msg_WR();
	}
}
//液压缸打开
void CCasc_011_jog::OnButtonJogGasOpen() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=JOG_GAS_OPEN;
	//CCASC_05Dlg dlg;
	if(global_jog_gas_status==0)
	{
		global_jog_gas_status=1;//打开液压缸
				
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_GAS_OPEN, NULL, NULL);
		//dlg.Msg_WR();
	}
	else
	{
		global_jog_gas_status=0;//关闭液压缸
		
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_GAS_OPEN, NULL, NULL);
		//dlg.Msg_WR();
	}
}
//焊点计数器清零
void CCasc_011_jog::OnButtonCntClr() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=JOG_CNT_CLEAR;
	//CCASC_05Dlg dlg;
	//dlg.Msg_WR();
}

void CCasc_011_jog::OnAxisActive() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=JOG_AXIS_SET;
	//CCASC_05Dlg dlg;
	global_jog_axis_status=0;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_AXIS_SET, NULL, NULL);
	global_up_dn_lim_status=0;
	//dlg.Msg_WR();
}

void CCasc_011_jog::OnOK() 
{
	// TODO: Add extra validation here
	global_aux_axis_confirm=1;
	KillTimer(1);
	KillTimer(2);
	global_mode=MAIN_JOG_MODE;
	global_up_dn_lim_status=0;
	CDialog::OnOK();
}

BOOL CCasc_011_jog::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	SetTimer(1,100,NULL);
	m_slv_dis=global_slv_pos_disp;//slv实时显示
	m_pin_dis=global_pin_pos_disp;//pin实时显示
	m_slv_axis_set=global_slv_axis_set;//slv设定坐标
	m_pin_axis_set=global_pin_axis_set;//pin设定坐标
	global_display_1=0;
	global_display_2=0;
	global_display_3=0;
	global_display_4=0;
	global_display_5=0;
	hfront_1=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_1_1);
	hback_1=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_1_0);
	hfront_2=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_2_1);
	hback_2=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_2_0);
	hfront_3=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_3_1);
	hback_3=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_3_0);
	hfront_4=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_4_1);
	hback_4=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_4_0);
	hfront_5=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_5_1);
	hback_5=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_5_0);
	hfront_6=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_6_1);
	hback_6=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_6_0);
	hfront_7=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_7_1);
	hback_7=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_7_0);
	hfront_8=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_8_1);
	hback_8=::AfxGetApp()->LoadIcon(IDI_ICON_011_JOG_8_0);
	UpdateData(FALSE);

	SetTimer(2,100,NULL);
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CCasc_011_jog::OnTimer(UINT nIDEvent) 
{
	// TODO: Add your message handler code here and/or call default
	switch(nIDEvent)
	{
	case 1:{
			m_slv_dis=global_slv_pos_disp;//slv实时显示
			m_pin_dis=global_pin_pos_disp;//pin实时显示
			m_slv_axis_set=global_slv_axis_set;//slv设定坐标
			m_pin_axis_set=global_pin_axis_set;//pin设定坐标
			if(global_display_1==1){m_jog_moni_1.SetIcon(hfront_1);}
			if(global_display_1==0){m_jog_moni_1.SetIcon(hback_1);}
			if(global_display_2==1){m_jog_moni_2.SetIcon(hfront_2);}
			if(global_display_2==0){m_jog_moni_2.SetIcon(hback_2);}
			if(global_display_3==1){m_jog_moni_3.SetIcon(hfront_3);}
			if(global_display_3==0){m_jog_moni_3.SetIcon(hback_3);}
			if(global_display_4==1){m_jog_moni_4.SetIcon(hfront_4);}
			if(global_display_4==0){m_jog_moni_4.SetIcon(hback_4);}
			if(global_display_5==1){m_jog_moni_5.SetIcon(hfront_5);}
			if(global_display_5==0){m_jog_moni_5.SetIcon(hback_5);}
			if(global_display_6==1){m_jog_moni_6.SetIcon(hfront_6);}
			if(global_display_6==0){m_jog_moni_6.SetIcon(hback_6);}
			if(global_display_7==1){m_jog_moni_7.SetIcon(hfront_7);}
			if(global_display_7==0){m_jog_moni_7.SetIcon(hback_7);}
			if(global_display_8==1){m_jog_moni_8.SetIcon(hfront_8);}
			if(global_display_8==0){m_jog_moni_8.SetIcon(hback_8);}
			UpdateData(FALSE);
			break;
		   }
	case 2:{
		if(m_011_jog_slv_pin.GetPos() == 100)KillTimer(1);
		//增长进度条
		m_011_jog_slv_pin.StepIt();
		break;}
	}
	CDialog::OnTimer(nIDEvent);
}

void CCasc_011_jog::OnAlarm3() 
{
	// TODO: Add your control notification handler code here
	CCasc_200_alarm auto_200_alarm3;
	auto_200_alarm3.DoModal();
}
