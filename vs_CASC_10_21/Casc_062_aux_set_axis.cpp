// Casc_062_aux_set_axis.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_062_aux_set_axis.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif
extern DWORD m_dwThreadId_Wr;
extern int global_opr_wr_rd;//写入与读取状态
extern int global_home_start;
extern int global_home_gas;
extern int global_home_pin;
extern int global_home_slv;
extern int global_mode;
extern int global_home_led;
/////////////////////////////////////////////////////////////////////////////
// CCasc_062_aux_set_axis dialog


CCasc_062_aux_set_axis::CCasc_062_aux_set_axis(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_062_aux_set_axis::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_062_aux_set_axis)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void CCasc_062_aux_set_axis::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_062_aux_set_axis)
	DDX_Control(pDX, IDC_STATIC_HOME_SLV, m_led_home_slv);
	DDX_Control(pDX, IDC_STATIC_HOME_PIN, m_led_home_pin);
	DDX_Control(pDX, IDC_STATIC_HOME, m_led_home);
	DDX_Control(pDX, IDC_STATIC_GAS_BRK, m_led_gas_brk);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_062_aux_set_axis, CDialog)
	//{{AFX_MSG_MAP(CCasc_062_aux_set_axis)
	ON_BN_CLICKED(IDC__AUX_HOME_GAS, OnAuxHomeGas)
	ON_BN_CLICKED(IDC_AUX_HOME_PIN, OnAuxHomePin)
	ON_BN_CLICKED(IDC_AUX_HOME_SLV, OnAuxHomeSlv)
	ON_BN_CLICKED(IDC_AUX_HOME_START, OnAuxHomeStart)
	ON_WM_TIMER()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_062_aux_set_axis message handlers

void CCasc_062_aux_set_axis::OnAuxHomeGas() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUX_GAS_OPEN;
	if(global_home_gas==0)
	{
		global_home_gas=1;//回原点气阀打开
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_HOME_GAS, NULL, NULL);
		//dlg.Msg_WR();
	}
	else
	{
		global_home_gas=0;//回原点气阀打开
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_HOME_GAS, NULL, NULL);
		//dlg.Msg_WR();
	}
}

void CCasc_062_aux_set_axis::OnAuxHomePin() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUX_HOME_PIN;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_HOME_PIN, NULL, NULL);
	global_home_led=1;
}

void CCasc_062_aux_set_axis::OnAuxHomeSlv() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUX_HOME_SLV;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_HOME_SLV, NULL, NULL);
	global_home_led=3;
}

void CCasc_062_aux_set_axis::OnAuxHomeStart() 
{
	// TODO: Add your control notification handler code here
	global_opr_wr_rd=AUX_HOME_START;
	global_mode=AUX_HOME_START;
	if(global_home_start==0)
	{
		global_home_start=1;//回原点启动
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_HOME_START, NULL, NULL);
		//dlg.Msg_WR();
	}
	else
	{
		global_home_start=0;//回原点关闭
		PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_HOME_START, NULL, NULL);
		//dlg.Msg_WR();
	}
}

void CCasc_062_aux_set_axis::OnOK() 
{
	// TODO: Add extra validation here
	global_opr_wr_rd=AUX_HOME_BACK;
	global_mode=AUX_FUNC;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_HOME_BACK, NULL, NULL);
	KillTimer(1);
	KillTimer(2);
	CDialog::OnOK();
}

BOOL CCasc_062_aux_set_axis::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	hfront_gas=::AfxGetApp()->LoadIcon(IDI_ICON_062_AXIS_L_GAS);
	hback_gas=::AfxGetApp()->LoadIcon(IDI_ICON_062_AXIS_S_GAS);
	hfront_home=::AfxGetApp()->LoadIcon(IDI_ICON_062_AXIS_L_HOME);
	hback_home=::AfxGetApp()->LoadIcon(IDI_ICON_062_AXIS_S_HOME);
	hfront_home_pin=::AfxGetApp()->LoadIcon(IDI_ICON_062_AXIS_L_HOME_PIN);
	hback_home_pin=::AfxGetApp()->LoadIcon(IDI_ICON_062_AXIS_S_HOME_PIN);
	hfront_home_slv=::AfxGetApp()->LoadIcon(IDI_ICON_062_AXIS_L_HOME_SLV);
	hback_home_slv=::AfxGetApp()->LoadIcon(IDI_ICON_062_AXIS_S_HOME_SLV);
	SetTimer(1,100,NULL);
	SetTimer(2,100,NULL);
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CCasc_062_aux_set_axis::OnTimer(UINT nIDEvent) 
{
	// TODO: Add your message handler code here and/or call default
	switch(nIDEvent)
	{
	case 1:{
			if(global_home_gas==1){m_led_gas_brk.SetIcon(hfront_gas);}//气动刹车
			if(global_home_gas==0){m_led_gas_brk.SetIcon(hback_gas);}
			if(global_home_start==1){m_led_home.SetIcon(hfront_home);}//回原点
			if(global_home_start==0){m_led_home.SetIcon(hback_home);}
			if(global_home_pin==1){
				m_led_home_pin.SetIcon(hfront_home_pin);
				global_home_led=0;}//搅拌针回原点
			//if(global_home_pin==0){m_led_home_pin.SetIcon(hback_home_pin);}
			if(global_home_slv==1){
				m_led_home_slv.SetIcon(hfront_home_slv);
				global_home_led=0;}//搅拌套回原点
			//if(global_home_slv==0){m_led_home_slv.SetIcon(hback_home_slv);}
			UpdateData(FALSE);
			break;
		   }
	case 2:{
			if(global_home_pin==0)
			{
				if(global_home_led==1)
				{
					m_led_home_pin.SetIcon(hfront_home_pin);
					global_home_led=2;
				}
				if(global_home_led==2)
				{
					m_led_home_pin.SetIcon(hback_home_pin);
					global_home_led=1;
				}
			}
			if(global_home_slv==0)
			{
				if(global_home_led==3)
				{
					m_led_home_pin.SetIcon(hfront_home_slv);
					global_home_led=4;
				}
				if(global_home_led==4)
				{
					m_led_home_pin.SetIcon(hback_home_slv);
					global_home_led=3;
				}
			}
			break;}
	}
	CDialog::OnTimer(nIDEvent);
}
