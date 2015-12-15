// Casc_200_alarm.cpp : implementation file
//

#include "stdafx.h"
#include "casc_05.h"
#include "CASC_05Dlg.h"
#include "Casc_200_alarm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

extern int   global_alarm;
extern char r_buf_alarm[36];
extern int	 global_up_dn_lim_status;
extern DWORD m_dwThreadId_Wr;
extern int   global_opr_wr_rd;
extern bool  global_alarm_status;
extern char  r_buf_alarm_m[6];
//分页
extern int   global_windows_num;
/////////////////////////////////////////////////////////////////////////////
// CCasc_200_alarm dialog


CCasc_200_alarm::CCasc_200_alarm(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_200_alarm::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_200_alarm)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void CCasc_200_alarm::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_200_alarm)
	DDX_Control(pDX, IDC_LIST_ALARM, m_list_alarm);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_200_alarm, CDialog)
	//{{AFX_MSG_MAP(CCasc_200_alarm)
	ON_BN_CLICKED(IDC_BUTTON_ALARM_OK, OnButtonAlarmOk)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_200_alarm message handlers

//DEL void CCasc_200_alarm::FreshList()
//DEL {
//DEL 
//DEL }

void CCasc_200_alarm::FreshList()
{
	//global_alarm=1;
	CString str;
	try
	{
		//查询数据库中RecipeInfo表的所有信息
		m_pRecordset->Open(_T("select * from alarm_info"), (IDispatch*)m_pConnection,\
					   adOpenDynamic,adLockOptimistic,adCmdText);
		//m_pRecordset->Open(_T("select * from StudentInfo"), (IDispatch*)m_pConnection,\
					   //adOpenDynamic,adLockOptimistic,adCmdText);
		
		int nItem;
		//清空列表中的所有数据
		m_list_alarm.DeleteAllItems();
		while(!m_pRecordset->adoEOF)//从初始位置查询是否是最后一个记录，是则刷新一次
		//if(global_alarm==1)
		{	
			//得到表中有多少记录
			nItem = m_list_alarm.GetItemCount();
			//报警号
			str=(LPCTSTR)_bstr_t(m_pRecordset->GetCollect("Alarm_ID"));
			m_list_alarm.InsertItem(nItem, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("Alarm_ID")));
			
			//报警说明
			str=(LPCTSTR)_bstr_t(m_pRecordset->GetCollect("Alarm_String"));
			m_list_alarm.SetItemText(nItem, 1, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("Alarm_String")));
			
			//int nItem = m_list_recipe.GetSelectionMark();
			//if(nItem == -1) return;
			//m_edit_recipe = m_list_recipe.GetItemText(nItem, 0);
			//m_edit_rot_dr = atof(m_list_recipe.GetItemText(nItem, 1));
			//m_edit_rot_1 = atof(m_list_recipe.GetItemText(nItem, 2));
			//CASE
			m_pRecordset->MoveNext();
		}
		m_pRecordset->Close();
		//global_alarm=2;
	}
	catch(_com_error e)
	{
		AfxMessageBox(_T("刷新列表失败！"));
	}
}

BOOL CCasc_200_alarm::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	//初始化COM环境
	::CoInitialize(NULL);

	m_list_alarm.SetExtendedStyle(m_list_alarm.GetExtendedStyle()|LVS_EX_FULLROWSELECT|LVS_EX_GRIDLINES);
	m_list_alarm.InsertColumn(0, _T("报警号"), LVCFMT_LEFT, 100);
	m_list_alarm.InsertColumn(1, _T("报警说明"), LVCFMT_LEFT, 300);

	_bstr_t strcnn(_T("Provider=Microsoft.JET.OLEDB.4.0;Data source=alarm.mdb"));
	try
	{
		m_pConnection.CreateInstance(__uuidof(Connection));
		m_pConnection->Open(strcnn,  _T(""), _T(""), adModeUnknown);
		m_pRecordset.CreateInstance(__uuidof(Recordset));
	}
	catch(_com_error e)
	{
		AfxMessageBox(_T("建立数据库失败!"), MB_OK|MB_ICONSTOP);
	}
	//FreshList();
	FreshAlarm();
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CCasc_200_alarm::FreshAlarm()
{
	 char temp_string[9][5];
	 char temp_led[7]="111001";
	 int n=0,m=0;
	 int temp_status_alarm=0;
	 int temp_status_alarm_led=0;
	 strOper=_T("=");
	 str_id=_T("Alarm_ID");

	 for(int i=0,j=0;i<=32;i=i+4,j++)
	 {
		 temp_string[j][0]=r_buf_alarm[i];
		 temp_string[j][1]=r_buf_alarm[i+1];
		 temp_string[j][2]=r_buf_alarm[i+2];
		 temp_string[j][3]=r_buf_alarm[i+3];
		 temp_string[j][4]=0;
	 }
	 if(strcmp(r_buf_alarm_m,"")>0)
	 {
		for(int p=0;p<=5;p++){temp_led[p]=r_buf_alarm_m[p];}
	 }
	 temp_led[6]=0;
	 int t=0;
	 t=strcmp(temp_led,"111001");
	 if(strcmp(temp_led,"111001")!=0)
	 {
		 int nItem;
		 nItem = m_list_alarm.GetItemCount();
		 if(temp_led[0]==48){m_list_alarm.InsertItem(nItem, "搅拌针伺服未上电");}
		 if(temp_led[1]==48){m_list_alarm.InsertItem(nItem, "搅拌套伺服未上电");}
		 if(temp_led[2]==48){m_list_alarm.InsertItem(nItem, "旋转电机伺服未上电");}
		 if(temp_led[3]==49){m_list_alarm.InsertItem(nItem, "操作盒紧急停止");}
		 if(temp_led[4]==49){m_list_alarm.InsertItem(nItem, "控制柜紧急停止");}
		 if(temp_led[5]==48){m_list_alarm.InsertItem(nItem, "气压过低");}
	 }
 
	 for(int k=0;k<9;k++)
	 {
		 
		 n=strcmp(temp_string[k],"0000");//当为空时小于0
		 if(strcmp(temp_string[k],"0000")>0){temp=_T(temp_string[k]);temp_status_alarm=n;}
		 //LIKE数据库处理
		 if(strOper = _T("LIKE"))
		 {//创建查询SQL语句
			strsql.Format(_T("select * from alarm_info where %s LIKE \'%%%s%%\'"),"Alarm_ID",temp);
		 }
		 //m_pRecordset->Open(_T("select * from alarm_info"), (IDispatch*)m_pConnection,\
						   //adOpenDynamic,adLockOptimistic,adCmdText);
		 try
		 {
			 m_pRecordset->Open(_bstr_t(strsql), (IDispatch*)m_pConnection,\
						   adOpenDynamic,adLockOptimistic,adCmdText);
			int nItem;
			//m_list_alarm.DeleteAllItems();
			if(temp_status_alarm>0)
			{
				while(!m_pRecordset->adoEOF)
				{	
					nItem = m_list_alarm.GetItemCount();
					CString str;
					str=(LPCTSTR)_bstr_t(m_pRecordset->GetCollect("Alarm_ID"));
					m_list_alarm.InsertItem(nItem, str);
					str=(LPCTSTR)_bstr_t(m_pRecordset->GetCollect("Alarm_String"));
					m_list_alarm.SetItemText(nItem, 1, str);
					//str=(LPCTSTR)_bstr_t(m_pRecordset->GetCollect("score"));
					//m_list_alarm.SetItemText(nItem, 2, str);
					m_pRecordset->MoveNext();
				}
			}
			m_pRecordset->Close();
		 }
		 catch(_com_error e)
		 {
			AfxMessageBox(_T("刷新列表失败!"));
		 }
		 temp_status_alarm=0;
	 }
// global_m_Event_Rd.SetEvent();
}

void CCasc_200_alarm::OnOK() 
{
	// TODO: Add extra validation here
	//global_mode=MAIN_JOG_MODE;
	global_up_dn_lim_status=0;
	global_alarm_status=FALSE;
	switch(global_windows_num)
	{
	case 0:{global_mode=ALARM_LIST;break;}
	case 1:{global_mode=MAIN_JOG_MODE;break;}//手动
	case 11:{global_mode=JOG_MONITOR_AXIS;break;}//手动监控
	case 2:{global_mode=MAIN_AUTO_MODE;break;}//自动
	case 3:{global_mode=MAIN_RECIPE;break;}//配方
	case 4:{global_mode=ALARM_LIST;break;}//系统
	case 41:{global_mode=ALARM_LIST;break;}//系统
	case 6:{global_mode=AUX_FUNC;break;}//辅助
	case 63:{global_mode=AUX_CLEAR;break;}//辅助清洗
	//case 61:{global_mode=AUX_ALIGN_ENTER;break;}//自动对刀
	//case 62:{global_mode=AUX_HOME_START;break;}//回原点状态监控
	default:{break;}
	}
	CDialog::OnOK();
}

void CCasc_200_alarm::OnButtonAlarmOk() 
{
	// TODO: Add your control notification handler code here
	global_mode=ALARM_LIST;
	global_opr_wr_rd=ALARM_LIST_1;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_OK, NULL, NULL);
	strcpy(r_buf_alarm,"000000000000000000000000000000000000");
	strcpy(r_buf_alarm_m,"111001");
	global_alarm_status=FALSE;
	//strcpy(r_buf,"");
	m_list_alarm.DeleteAllItems();
}
