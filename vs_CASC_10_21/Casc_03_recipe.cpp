// Casc_03_recipe.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "Casc_03_recipe.h"
#include "Casc_092_char_keyboard.h"
#include "Casc_091_num_keyboard.h"
#include "CASC_05Dlg.h"
#include "Casc_200_alarm.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif
extern DWORD m_dwThreadId_Wr;
extern int global_opr_wr_rd;//写入与读取状态
/////////////////////////////////////////////////////////////////////////////
// CCasc_03_recipe dialog
extern float	global_edit_pin[10];
extern float	global_edit_slv[10];
extern float	global_edit_time[10];
extern float	global_edit_rot[10];

extern CString global_recipe_name;
extern int  global_i_char_to_float;
extern int  global_m;
extern char	global_recipe_rot_spd[10][8];
extern char	global_recipe_pin_pos[10][8];
extern char	global_recipe_slv_pos[10][8];
extern char	global_recipe_time[10][8];
extern int  global_slv_latch;
extern int  global_pin_latch;
extern int  global_num_id;
CCasc_03_recipe::CCasc_03_recipe(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_03_recipe::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_03_recipe)
	m_edit_pin_1 = 0.0f;
	m_edit_pin_2 = 0.0f;
	m_edit_pin_3 = 0.0f;
	m_edit_pin_4 = 0.0f;
	m_edit_pin_5 = 0.0f;
	m_edit_pin_6 = 0.0f;
	m_edit_pin_7 = 0.0f;
	m_edit_pin_8 = 0.0f;
	m_edit_pin_9 = 0.0f;
	m_edit_pin_dr = 0.0f;
	m_edit_recipe = _T("");
	m_edit_slv_1 = 0.0f;
	m_edit_slv_2 = 0.0f;
	m_edit_slv_3 = 0.0f;
	m_edit_slv_4 = 0.0f;
	m_edit_slv_5 = 0.0f;
	m_edit_slv_6 = 0.0f;
	m_edit_slv_7 = 0.0f;
	m_edit_slv_8 = 0.0f;
	m_edit_slv_9 = 0.0f;
	m_edit_slv_dr = 0.0f;
	m_edit_rot_1 = 0.0f;
	m_edit_rot_2 = 0.0f;
	m_edit_rot_3 = 0.0f;
	m_edit_rot_4 = 0.0f;
	m_edit_rot_5 = 0.0f;
	m_edit_rot_6 = 0.0f;
	m_edit_rot_7 = 0.0f;
	m_edit_rot_8 = 0.0f;
	m_edit_rot_9 = 0.0f;
	m_edit_rot_dr = 0.0f;
	m_edit_time_1 = 0.0f;
	m_edit_time_2 = 0.0f;
	m_edit_time_3 = 0.0f;
	m_edit_time_4 = 0.0f;
	m_edit_time_5 = 0.0f;
	m_edit_time_6 = 0.0f;
	m_edit_time_7 = 0.0f;
	m_edit_time_8 = 0.0f;
	m_edit_time_9 = 0.0f;
	m_edit_time_dr = 0.0f;
	//}}AFX_DATA_INIT
	//初始化COM环境
	//::CoInitialize(NULL);
}


void CCasc_03_recipe::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_03_recipe)
	DDX_Control(pDX, IDC_LIST_RECIPE, m_list_recipe);
	DDX_Text(pDX, IDC_EDIT_PIN_1, m_edit_pin_1);
	DDX_Text(pDX, IDC_EDIT_PIN_2, m_edit_pin_2);
	DDX_Text(pDX, IDC_EDIT_PIN_3, m_edit_pin_3);
	DDX_Text(pDX, IDC_EDIT_PIN_4, m_edit_pin_4);
	DDX_Text(pDX, IDC_EDIT_PIN_5, m_edit_pin_5);
	DDX_Text(pDX, IDC_EDIT_PIN_6, m_edit_pin_6);
	DDX_Text(pDX, IDC_EDIT_PIN_7, m_edit_pin_7);
	DDX_Text(pDX, IDC_EDIT_PIN_8, m_edit_pin_8);
	DDX_Text(pDX, IDC_EDIT_PIN_9, m_edit_pin_9);
	DDX_Text(pDX, IDC_EDIT_PIN_DR, m_edit_pin_dr);
	DDX_Text(pDX, IDC_EDIT_RECIPE, m_edit_recipe);
	DDX_Text(pDX, IDC_EDIT_SLV_1, m_edit_slv_1);
	DDX_Text(pDX, IDC_EDIT_SLV_2, m_edit_slv_2);
	DDX_Text(pDX, IDC_EDIT_SLV_3, m_edit_slv_3);
	DDX_Text(pDX, IDC_EDIT_SLV_4, m_edit_slv_4);
	DDX_Text(pDX, IDC_EDIT_SLV_5, m_edit_slv_5);
	DDX_Text(pDX, IDC_EDIT_SLV_6, m_edit_slv_6);
	DDX_Text(pDX, IDC_EDIT_SLV_7, m_edit_slv_7);
	DDX_Text(pDX, IDC_EDIT_SLV_8, m_edit_slv_8);
	DDX_Text(pDX, IDC_EDIT_SLV_9, m_edit_slv_9);
	DDX_Text(pDX, IDC_EDIT_SLV_DR, m_edit_slv_dr);
	DDX_Text(pDX, IDC_EDIT_ROT_1, m_edit_rot_1);
	DDX_Text(pDX, IDC_EDIT_ROT_2, m_edit_rot_2);
	DDX_Text(pDX, IDC_EDIT_ROT_3, m_edit_rot_3);
	DDX_Text(pDX, IDC_EDIT_ROT_4, m_edit_rot_4);
	DDX_Text(pDX, IDC_EDIT_ROT_5, m_edit_rot_5);
	DDX_Text(pDX, IDC_EDIT_ROT_6, m_edit_rot_6);
	DDX_Text(pDX, IDC_EDIT_ROT_7, m_edit_rot_7);
	DDX_Text(pDX, IDC_EDIT_ROT_8, m_edit_rot_8);
	DDX_Text(pDX, IDC_EDIT_ROT_9, m_edit_rot_9);
	DDX_Text(pDX, IDC_EDIT_ROT_DR, m_edit_rot_dr);
	DDX_Text(pDX, IDC_EDIT_TIME_1, m_edit_time_1);
	DDX_Text(pDX, IDC_EDIT_TIME_2, m_edit_time_2);
	DDX_Text(pDX, IDC_EDIT_TIME_3, m_edit_time_3);
	DDX_Text(pDX, IDC_EDIT_TIME_4, m_edit_time_4);
	DDX_Text(pDX, IDC_EDIT_TIME_5, m_edit_time_5);
	DDX_Text(pDX, IDC_EDIT_TIME_6, m_edit_time_6);
	DDX_Text(pDX, IDC_EDIT_TIME_7, m_edit_time_7);
	DDX_Text(pDX, IDC_EDIT_TIME_8, m_edit_time_8);
	DDX_Text(pDX, IDC_EDIT_TIME_9, m_edit_time_9);
	DDX_Text(pDX, IDC_EDIT_TIME_DR, m_edit_time_dr);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_03_recipe, CDialog)
	//{{AFX_MSG_MAP(CCasc_03_recipe)
	ON_BN_CLICKED(IDC_BUTTON_MODY, OnButtonMody)
	ON_BN_CLICKED(IDC_BUTTON_SAV, OnButtonSav)
	ON_BN_CLICKED(IDC_BUTTON_DEL, OnButtonDel)
	ON_BN_CLICKED(IDC_BUTTON_ADD, OnButtonAdd)
	ON_BN_CLICKED(IDC_BUTTON_CAN_OPR, OnButtonCanOpr)
	ON_NOTIFY(NM_CLICK, IDC_LIST_RECIPE, OnClickListRecipe)
	ON_NOTIFY(NM_DBLCLK, IDC_LIST_RECIPE, OnDblclkListRecipe)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_DR, OnSetfocusEditRotDr)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_1, OnSetfocusEditRot1)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_2, OnSetfocusEditRot2)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_3, OnSetfocusEditRot3)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_4, OnSetfocusEditRot4)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_5, OnSetfocusEditRot5)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_6, OnSetfocusEditRot6)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_7, OnSetfocusEditRot7)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_8, OnSetfocusEditRot8)
	ON_EN_SETFOCUS(IDC_EDIT_ROT_9, OnSetfocusEditRot9)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_DR, OnSetfocusEditPinDr)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_1, OnSetfocusEditPin1)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_2, OnSetfocusEditPin2)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_3, OnSetfocusEditPin3)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_4, OnSetfocusEditPin4)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_5, OnSetfocusEditPin5)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_6, OnSetfocusEditPin6)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_7, OnSetfocusEditPin7)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_8, OnSetfocusEditPin8)
	ON_EN_SETFOCUS(IDC_EDIT_PIN_9, OnSetfocusEditPin9)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_DR, OnSetfocusEditSlvDr)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_1, OnSetfocusEditSlv1)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_2, OnSetfocusEditSlv2)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_3, OnSetfocusEditSlv3)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_4, OnSetfocusEditSlv4)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_5, OnSetfocusEditSlv5)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_6, OnSetfocusEditSlv6)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_7, OnSetfocusEditSlv7)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_8, OnSetfocusEditSlv8)
	ON_EN_SETFOCUS(IDC_EDIT_SLV_9, OnSetfocusEditSlv9)
	ON_EN_SETFOCUS(IDC_EDIT_TIME_1, OnSetfocusEditTime1)
	ON_EN_SETFOCUS(IDC_EDIT_TIME_2, OnSetfocusEditTime2)
	ON_EN_SETFOCUS(IDC_EDIT_TIME_3, OnSetfocusEditTime3)
	ON_EN_SETFOCUS(IDC_EDIT_TIME_4, OnSetfocusEditTime4)
	ON_EN_SETFOCUS(IDC_EDIT_TIME_5, OnSetfocusEditTime5)
	ON_EN_SETFOCUS(IDC_EDIT_TIME_6, OnSetfocusEditTime6)
	ON_EN_SETFOCUS(IDC_EDIT_TIME_7, OnSetfocusEditTime7)
	ON_EN_SETFOCUS(IDC_EDIT_TIME_8, OnSetfocusEditTime8)
	ON_EN_SETFOCUS(IDC_EDIT_TIME_9, OnSetfocusEditTime9)
	ON_EN_SETFOCUS(IDC_EDIT_RECIPE, OnSetfocusEditRecipe)
	ON_BN_CLICKED(IDC_BUTTON_ACT, OnButtonAct)
	ON_BN_CLICKED(IDC_ALARM5, OnAlarm5)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

void CCasc_03_recipe::OnButtonMody() 
{
	// TODO: Add your control notification handler code here
	m_nOperate = 2;
	EnableInput(TRUE);

	//修改的时候不能修改配方名称
	CEdit *pEdit = (CEdit*)GetDlgItem(IDC_EDIT_RECIPE);
	pEdit->SetReadOnly(TRUE);
}

void CCasc_03_recipe::OnButtonSav() 
{
	// TODO: Add your control notification handler code here
	int i=0,j=0;
	//当单击“保存”按钮后，查看状态是修改还是新增
	if(m_nOperate == 1) //增加
	{
		UpdateData(TRUE);
		//配方名是否为空
		if(m_edit_recipe.IsEmpty())
		{
			AfxMessageBox(_T("配方名不能为空."));
			return;
		}
		
		CString strSql;//插入记录的SQL语句
		strSql.Format(_T("Insert into RecipeInfo values('%s',%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f)"),m_edit_recipe,m_edit_rot_dr,m_edit_rot_1,m_edit_rot_2,m_edit_rot_3,m_edit_rot_4,m_edit_rot_5,m_edit_rot_6,m_edit_rot_7,m_edit_rot_8,m_edit_rot_9,m_edit_pin_dr,m_edit_pin_1,m_edit_pin_2,m_edit_pin_3,m_edit_pin_4,m_edit_pin_5,m_edit_pin_6,m_edit_pin_7,m_edit_pin_8,m_edit_pin_9,m_edit_slv_dr,m_edit_slv_1,m_edit_slv_2,m_edit_slv_3,m_edit_slv_4,m_edit_slv_5,m_edit_slv_6,m_edit_slv_7,m_edit_slv_8,m_edit_slv_9,m_edit_time_dr,m_edit_time_1,m_edit_time_2,m_edit_time_3,m_edit_time_4,m_edit_time_5,m_edit_time_6,m_edit_time_7,m_edit_time_8,m_edit_time_9);
		try
		{
			m_pConnection->Execute(_bstr_t(strSql), 0, adCmdText);
		}
		catch(_com_error e)
		{
			AfxMessageBox(_T("增加配方失败!"));
			i=1;
		}
		if(i==0)
		{
			AfxMessageBox(_T("增加配方成功!"));
			i=0;
		}
		FreshList();
	}
	else if(m_nOperate == 2) //修改
	{
		UpdateData(TRUE);
		if(m_edit_recipe.IsEmpty())
		{
			AfxMessageBox(_T("配方名不能为空."));
			return;
		}
		//SQL指令输入
		CString strSql;
		strSql.Format(_T("update RecipeInfo set \
				          rot_dr = %f, rot_1 = %f, rot_2 = %f, rot_3 = %f, rot_4 = %f, rot_5 = %f, \
						  rot_6 = %f, rot_7 = %f, rot_8 = %f, rot_9 = %f, \
						  pin_dr = %f, pin_1 = %f, pin_2 = %f, pin_3 = %f, pin_4 = %f, pin_5 = %f, \
						  pin_6 = %f, pin_7 = %f, pin_8 = %f, pin_9 = %f, \
						  slv_dr = %f, slv_1 = %f, slv_2 = %f, slv_3 = %f, slv_4 = %f, slv_5 = %f, \
			              slv_6 = %f, slv_7 = %f, slv_8 = %f, slv_9 = %f, \
						  time_dr = %f, time_1 = %f, time_2 = %f, time_3 = %f, time_4 = %f, time_5 = %f, \
						  time_6 = %f, time_7 = %f, time_8 = %f, time_9 = %f where recipe_cur_name=\'%s\'"),
						  m_edit_rot_dr,m_edit_rot_1,m_edit_rot_2,m_edit_rot_3,m_edit_rot_4,m_edit_rot_5,
						  m_edit_rot_6,m_edit_rot_7,m_edit_rot_8,m_edit_rot_9,
						  m_edit_pin_dr,m_edit_pin_1,m_edit_pin_2,m_edit_pin_3,m_edit_pin_4,m_edit_pin_5,
						  m_edit_pin_6,m_edit_pin_7,m_edit_pin_8,m_edit_pin_9,
						  m_edit_slv_dr,m_edit_slv_1,m_edit_slv_2,m_edit_slv_3,m_edit_slv_4,m_edit_slv_5,
						  m_edit_slv_6,m_edit_slv_7,m_edit_slv_8,m_edit_slv_9,
						  m_edit_time_dr,m_edit_time_1,m_edit_time_2,m_edit_time_3,m_edit_time_4,m_edit_time_5,
						  m_edit_time_6,m_edit_time_7,m_edit_time_8,m_edit_time_9,m_edit_recipe);
		try
		{
			m_pConnection->Execute(_bstr_t(strSql), 0, adCmdText);
		}
		catch(_com_error e)
		{
			AfxMessageBox(_T("修改记录失败!"));
			j=1;
		}
		if(j==0)
		{
			AfxMessageBox(_T("修改记录成功!"));
			j=0;
		}
		FreshList();
	}
	m_nOperate = 0;
	EnableInput(FALSE);
	
}

void CCasc_03_recipe::OnButtonDel() 
{
	// TODO: Add your control notification handler code here
	UpdateData(TRUE);
	if(m_edit_recipe.IsEmpty())
	{
		AfxMessageBox(_T("配方名不能为空."));
		return;
	}
	CString strsql;
	strsql.Format(_T("DELETE from RecipeInfo where recipe_cur_name = \'%s\'"), m_edit_recipe);
	try//执行SQL语句
	{
		m_pConnection->Execute(_bstr_t(strsql), 0, adCmdText);
	}
	catch(_com_error e)//捕获SQL异常
	{
		AfxMessageBox(_T("删除记录失败!"));
	}
	AfxMessageBox(_T("删除记录成功!"));
	FreshList();
}
//控制文本控件的输入
void CCasc_03_recipe::EnableInput(BOOL bEnable)
{
	CEdit *pEdit;
	CButton *pButton;
	//只读控制
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_RECIPE);//配方名
	pEdit->SetReadOnly(!bEnable);
	
	//主轴旋转//为0是可以写入
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_DR);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_1);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_2);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_3);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_4);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_5);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_6);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_7);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_8);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_ROT_9);
	pEdit->SetReadOnly(!bEnable);

	//搅拌针行程
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_DR);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_1);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_2);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_3);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_4);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_5);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_6);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_7);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_8);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_PIN_9);
	pEdit->SetReadOnly(!bEnable);

	//搅拌套行程
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_DR);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_1);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_2);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_3);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_4);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_5);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_6);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_7);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_8);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_SLV_9);
	pEdit->SetReadOnly(!bEnable);
	
	//时间
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_DR);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_1);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_2);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_3);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_4);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_5);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_6);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_7);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_8);
	pEdit->SetReadOnly(!bEnable);
	pEdit = (CEdit*)GetDlgItem(IDC_EDIT_TIME_9);
	pEdit->SetReadOnly(!bEnable);

	//配方操作控制
	//添加
	pButton =(CButton*)GetDlgItem(IDC_BUTTON_ADD);
	pButton->EnableWindow(!bEnable);
	//修改
	pButton =(CButton*)GetDlgItem(IDC_BUTTON_MODY);
	pButton->EnableWindow(!bEnable);
	//删除
	pButton =(CButton*)GetDlgItem(IDC_BUTTON_DEL);
	pButton->EnableWindow(!bEnable);
	//保存
	pButton =(CButton*)GetDlgItem(IDC_BUTTON_SAV);
	pButton->EnableWindow(bEnable);
	//取消
	pButton =(CButton*)GetDlgItem(IDC_BUTTON_CAN_OPR);
	pButton->EnableWindow(bEnable);
	//激活
	pButton =(CButton*)GetDlgItem(IDC_BUTTON_ACT);
	pButton->EnableWindow(!bEnable);

	m_list_recipe.EnableWindow(!bEnable);
}
//读数据库数据时用于列表刷新
void CCasc_03_recipe::FreshList()
{
	try
	{
		//查询数据库中RecipeInfo表的所有信息
		m_pRecordset->Open(_T("select * from RecipeInfo"), (IDispatch*)m_pConnection,\
					   adOpenDynamic,adLockOptimistic,adCmdText);
		//m_pRecordset->Open(_T("select * from StudentInfo"), (IDispatch*)m_pConnection,\
					   //adOpenDynamic,adLockOptimistic,adCmdText);
		
		int nItem;
		//清空列表中的所有数据
		m_list_recipe.DeleteAllItems();
		while(!m_pRecordset->adoEOF)//从初始位置查询是否是最后一个记录，是则刷新一次
		{	
			//得到表中有多少记录
			nItem = m_list_recipe.GetItemCount();
			//配方名数据库记录
			m_list_recipe.InsertItem(nItem, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("recipe_cur_name")));
			//主轴旋转
			m_list_recipe.SetItemText(nItem, 1, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_dr")));
			m_list_recipe.SetItemText(nItem, 2, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_1")));
			m_list_recipe.SetItemText(nItem, 3, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_2")));
			m_list_recipe.SetItemText(nItem, 4, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_3")));
			m_list_recipe.SetItemText(nItem, 5, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_4")));
			m_list_recipe.SetItemText(nItem, 6, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_5")));
			m_list_recipe.SetItemText(nItem, 7, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_6")));
			m_list_recipe.SetItemText(nItem, 8, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_7")));
			m_list_recipe.SetItemText(nItem, 9, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_8")));
			m_list_recipe.SetItemText(nItem, 10, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("rot_9")));
			//搅拌针
			m_list_recipe.SetItemText(nItem, 11, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_dr")));
			m_list_recipe.SetItemText(nItem, 12, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_1")));
			m_list_recipe.SetItemText(nItem, 13, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_2")));
			m_list_recipe.SetItemText(nItem, 14, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_3")));
			m_list_recipe.SetItemText(nItem, 15, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_4")));
			m_list_recipe.SetItemText(nItem, 16, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_5")));
			m_list_recipe.SetItemText(nItem, 17, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_6")));
			m_list_recipe.SetItemText(nItem, 18, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_7")));
			m_list_recipe.SetItemText(nItem, 19, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_8")));
			m_list_recipe.SetItemText(nItem, 20, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("pin_9")));

			//搅拌套
			m_list_recipe.SetItemText(nItem, 21, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_dr")));
			m_list_recipe.SetItemText(nItem, 22, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_1")));
			m_list_recipe.SetItemText(nItem, 23, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_2")));
			m_list_recipe.SetItemText(nItem, 24, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_3")));
			m_list_recipe.SetItemText(nItem, 25, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_4")));
			m_list_recipe.SetItemText(nItem, 26, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_5")));
			m_list_recipe.SetItemText(nItem, 27, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_6")));
			m_list_recipe.SetItemText(nItem, 28, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_7")));
			m_list_recipe.SetItemText(nItem, 29, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_8")));
			m_list_recipe.SetItemText(nItem, 30, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("slv_9")));

			//时间
			m_list_recipe.SetItemText(nItem, 31, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_dr")));
			m_list_recipe.SetItemText(nItem, 32, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_1")));
			m_list_recipe.SetItemText(nItem, 33, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_2")));
			m_list_recipe.SetItemText(nItem, 34, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_3")));
			m_list_recipe.SetItemText(nItem, 35, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_4")));
			m_list_recipe.SetItemText(nItem, 36, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_5")));
			m_list_recipe.SetItemText(nItem, 37, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_6")));
			m_list_recipe.SetItemText(nItem, 38, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_7")));
			m_list_recipe.SetItemText(nItem, 39, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_8")));
			m_list_recipe.SetItemText(nItem, 40, (LPCTSTR)_bstr_t(m_pRecordset->GetCollect("time_9")));
			
			m_pRecordset->MoveNext();
		}
		m_pRecordset->Close();
	}
	catch(_com_error e)
	{
		AfxMessageBox(_T("刷新列表失败！"));
	}
}
//添加记录
void CCasc_03_recipe::OnButtonAdd() 
{
	// TODO: Add your control notification handler code here
	m_nOperate = 1;
	EnableInput(TRUE);
}
//取消操作
void CCasc_03_recipe::OnButtonCanOpr() 
{
	// TODO: Add your control notification handler code here
	m_nOperate = 0;
	EnableInput(FALSE);
}
//点击配方名查询结果输出
void CCasc_03_recipe::OnClickListRecipe(NMHDR* pNMHDR, LRESULT* pResult) 
{
	// TODO: Add your control notification handler code here
	int nItem = m_list_recipe.GetSelectionMark();
	if(nItem == -1) return;
	m_edit_recipe = m_list_recipe.GetItemText(nItem, 0);
	m_edit_rot_dr = atof(m_list_recipe.GetItemText(nItem, 1));
	m_edit_rot_1 = atof(m_list_recipe.GetItemText(nItem, 2));
	m_edit_rot_2 = atof(m_list_recipe.GetItemText(nItem, 3));
	m_edit_rot_3 = atof(m_list_recipe.GetItemText(nItem, 4));
	m_edit_rot_4 = atof(m_list_recipe.GetItemText(nItem, 5));
	m_edit_rot_5 = atof(m_list_recipe.GetItemText(nItem, 6));
	m_edit_rot_6 = atof(m_list_recipe.GetItemText(nItem, 7));
	m_edit_rot_7 = atof(m_list_recipe.GetItemText(nItem, 8));
	m_edit_rot_8 = atof(m_list_recipe.GetItemText(nItem, 9));
	m_edit_rot_9 = atof(m_list_recipe.GetItemText(nItem, 10));
	m_edit_pin_dr = atof(m_list_recipe.GetItemText(nItem, 11));
	m_edit_pin_1 = atof(m_list_recipe.GetItemText(nItem, 12));
	m_edit_pin_2 = atof(m_list_recipe.GetItemText(nItem, 13));
	m_edit_pin_3 = atof(m_list_recipe.GetItemText(nItem, 14));
	m_edit_pin_4 = atof(m_list_recipe.GetItemText(nItem, 15));
	m_edit_pin_5 = atof(m_list_recipe.GetItemText(nItem, 16));
	m_edit_pin_6 = atof(m_list_recipe.GetItemText(nItem, 17));
	m_edit_pin_7 = atof(m_list_recipe.GetItemText(nItem, 18));
	m_edit_pin_8 = atof(m_list_recipe.GetItemText(nItem, 19));
	m_edit_pin_9 = atof(m_list_recipe.GetItemText(nItem, 20));
	m_edit_slv_dr = atof(m_list_recipe.GetItemText(nItem, 21));
	m_edit_slv_1 = atof(m_list_recipe.GetItemText(nItem, 22));
	m_edit_slv_2 = atof(m_list_recipe.GetItemText(nItem, 23));
	m_edit_slv_3 = atof(m_list_recipe.GetItemText(nItem, 24));
	m_edit_slv_4 = atof(m_list_recipe.GetItemText(nItem, 25));
	m_edit_slv_5 = atof(m_list_recipe.GetItemText(nItem, 26));
	m_edit_slv_6 = atof(m_list_recipe.GetItemText(nItem, 27));
	m_edit_slv_7 = atof(m_list_recipe.GetItemText(nItem, 28));
	m_edit_slv_8 = atof(m_list_recipe.GetItemText(nItem, 29));
	m_edit_slv_9 = atof(m_list_recipe.GetItemText(nItem, 30));
	m_edit_time_dr = atof(m_list_recipe.GetItemText(nItem, 31));
	m_edit_time_1 = atof(m_list_recipe.GetItemText(nItem, 32));
	m_edit_time_2 = atof(m_list_recipe.GetItemText(nItem, 33));
	m_edit_time_3 = atof(m_list_recipe.GetItemText(nItem, 34));
	m_edit_time_4 = atof(m_list_recipe.GetItemText(nItem, 35));
	m_edit_time_5 = atof(m_list_recipe.GetItemText(nItem, 36));
	m_edit_time_6 = atof(m_list_recipe.GetItemText(nItem, 37));
	m_edit_time_7 = atof(m_list_recipe.GetItemText(nItem, 38));
	m_edit_time_8 = atof(m_list_recipe.GetItemText(nItem, 39));
	m_edit_time_9 = atof(m_list_recipe.GetItemText(nItem, 40));

	UpdateData(FALSE);
	*pResult = 0;
}

void CCasc_03_recipe::OnClose()
{
	m_pRecordset.Release();
	m_pConnection->Close();
	m_pConnection.Release();
	CDialog::OnClose();
}

void CCasc_03_recipe::OnDblclkListRecipe(NMHDR* pNMHDR, LRESULT* pResult) 
{
	// TODO: Add your control notification handler code here
	
	*pResult = 0;
}
//初始化数据库
BOOL CCasc_03_recipe::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	//初始化COM环境
	::CoInitialize(NULL);

	m_list_recipe.SetExtendedStyle(m_list_recipe.GetExtendedStyle()|LVS_EX_FULLROWSELECT|LVS_EX_GRIDLINES);
	m_list_recipe.InsertColumn(0, _T("配方名"), LVCFMT_LEFT, 250);
	m_list_recipe.InsertColumn(1, _T("主轴转速dr"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(2, _T("主轴转速1"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(3, _T("主轴转速2"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(4, _T("主轴转速3"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(5, _T("主轴转速4"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(6, _T("主轴转速5"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(7, _T("主轴转速6"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(8, _T("主轴转速7"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(9, _T("主轴转速8"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(10, _T("主轴转速9"), LVCFMT_LEFT, 100);

	m_list_recipe.InsertColumn(11, _T("搅拌针行程dr"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(12, _T("搅拌针行程1"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(13, _T("搅拌针行程2"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(14, _T("搅拌针行程3"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(15, _T("搅拌针行程4"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(16, _T("搅拌针行程5"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(17, _T("搅拌针行程6"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(18, _T("搅拌针行程7"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(19, _T("搅拌针行程8"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(20, _T("搅拌针行程9"), LVCFMT_LEFT, 100);

	m_list_recipe.InsertColumn(21, _T("搅拌套行程dr"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(22, _T("搅拌套行程1"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(23, _T("搅拌套行程2"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(24, _T("搅拌套行程3"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(25, _T("搅拌套行程4"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(26, _T("搅拌套行程5"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(27, _T("搅拌套行程6"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(28, _T("搅拌套行程7"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(29, _T("搅拌套行程8"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(30, _T("搅拌套行程9"), LVCFMT_LEFT, 100);

	m_list_recipe.InsertColumn(31, _T("时间dr"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(32, _T("时间1"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(33, _T("时间2"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(34, _T("时间3"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(35, _T("时间4"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(36, _T("时间5"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(37, _T("时间6"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(38, _T("时间7"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(39, _T("时间8"), LVCFMT_LEFT, 100);
	m_list_recipe.InsertColumn(40, _T("时间9"), LVCFMT_LEFT, 100);

	EnableInput(FALSE);
	m_nOperate = 0;
	
	_bstr_t strcnn(_T("Provider=Microsoft.JET.OLEDB.4.0;Data source=e:/recipe.mdb"));
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
	FreshList();
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}
//点击输入框弹出数字键盘=======================================================================
void CCasc_03_recipe::OnSetfocusEditRotDr() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_dr;
	global_num_id=310;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_dr.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_DR;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_DR);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_dr,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditRot1() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_1;
	global_num_id=311;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_1.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_1;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_1);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_1,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditRot2() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_2;
	global_num_id=312;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_2.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_2;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_2);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_2,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditRot3() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_3;
	global_num_id=313;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_3.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_3;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_3);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_3,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditRot4() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_4;
	global_num_id=314;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_4.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_4;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_4);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_4,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditRot5() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_5;
	global_num_id=315;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_5.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_5;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_5);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_5,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditRot6() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_6;
	global_num_id=316;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_6.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_6;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_6);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_6,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditRot7() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_7;
	global_num_id=317;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_7.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_7;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_7);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_7,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditRot8() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_8;
	global_num_id=318;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_8.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_8;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_8);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_8,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditRot9() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_rot_9;
	global_num_id=319;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_rot_9.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_ROT_SPD_9;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_ROT_9);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_rot_spd_9,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPinDr() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_dr;
	global_num_id=320;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_dr.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_DR;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_DR);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_dr,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPin1() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_1;
	global_num_id=321;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_1.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_1;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_1);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_1,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPin2() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_2;
	global_num_id=322;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_2.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_2;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_2);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_2,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPin3() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_3;
	global_num_id=323;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_3.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_3;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_3);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_3,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPin4() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_4;
	global_num_id=324;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_4.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_4;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_4);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_4,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPin5() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_5;
	global_num_id=325;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_5.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_5;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_5);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_5,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPin6() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_6;
	global_num_id=326;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_6.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_6;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_6);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_6,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPin7() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_7;
	global_num_id=327;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_7.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_7;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_7);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_7,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPin8() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_8;
	global_num_id=328;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_8.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_8;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_8);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_8,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditPin9() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_pin_9;
	global_num_id=329;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_pin_9.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_PIN_POS_9;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PIN_9);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_pin_pos_9,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlvDr() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_dr;
	global_num_id=330;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_dr.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_DR;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_DR);
			z_mEdit->SetWindowText(test);
		//	reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_slv_pos_dr,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlv1() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_1;
	global_num_id=331;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_1.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_1;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_1);
			z_mEdit->SetWindowText(test);
		//	reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
		//	strcpy(global_recipe_slv_pos_1,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlv2() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_2;
	global_num_id=332;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_2.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_2;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_2);
			z_mEdit->SetWindowText(test);
		//	reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
		//	strcpy(global_recipe_slv_pos_2,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlv3() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_3;
	global_num_id=333;//3为配方，2为pin，0为DR
	//CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_3.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_3;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_3);
			z_mEdit->SetWindowText(test);
		//	reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
		//	strcpy(global_recipe_slv_pos_3,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlv4() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_4;
	global_num_id=334;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_4.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_4;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_4);
			z_mEdit->SetWindowText(test);
		//	reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
		//	strcpy(global_recipe_slv_pos_4,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlv5() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_5;
	global_num_id=335;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_5.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_5;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_5);
			z_mEdit->SetWindowText(test);
		//	reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
		//	strcpy(global_recipe_slv_pos_5,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlv6() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_6;
	global_num_id=336;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_6.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_6;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_6);
			z_mEdit->SetWindowText(test);
	//		reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
	//		strcpy(global_recipe_slv_pos_6,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlv7() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_7;
	global_num_id=337;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_7.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_7;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_7);
			z_mEdit->SetWindowText(test);
		//	reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
		//	strcpy(global_recipe_slv_pos_7,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlv8() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_8;
	global_num_id=338;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_8.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_8;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_8);
			z_mEdit->SetWindowText(test);
		//	reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
		//	strcpy(global_recipe_slv_pos_8,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditSlv9() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_slv_9;
	global_num_id=339;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_slv_9.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_SLV_POS_9;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_SLV_9);
			z_mEdit->SetWindowText(test);
	//		reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
		//	strcpy(global_recipe_slv_pos_9,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditTime1() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_time_1;
	global_num_id=341;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_time_1.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_TIME_1;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_1);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_time_1,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditTime2() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_time_2;
	global_num_id=342;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_time_2.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_TIME_2;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_2);
			z_mEdit->SetWindowText(test);
			//reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
			//strcpy(global_recipe_time_2,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditTime3() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_time_3;
	global_num_id=343;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_time_3.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_TIME_3;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_3);
			z_mEdit->SetWindowText(test);
	//		reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
	//		strcpy(global_recipe_time_3,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditTime4() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_time_4;
	global_num_id=344;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_time_4.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_TIME_4;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_4);
			z_mEdit->SetWindowText(test);
	//		reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
	//		strcpy(global_recipe_time_4,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditTime5() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_time_5;
	global_num_id=345;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_time_5.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_TIME_5;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_5);
			z_mEdit->SetWindowText(test);
	//		reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
	//		strcpy(global_recipe_time_5,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditTime6() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_time_6;
	global_num_id=346;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_time_6.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_TIME_6;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_6);
			z_mEdit->SetWindowText(test);
	//		reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
	//		strcpy(global_recipe_time_6,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditTime7() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_time_7;
	global_num_id=347;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_time_7.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_TIME_7;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_7);
			z_mEdit->SetWindowText(test);
	//		reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
	//		strcpy(global_recipe_time_7,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditTime8() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_time_8;
	global_num_id=348;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_time_8.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_TIME_8;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_8);
			z_mEdit->SetWindowText(test);
	//		reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
	//		strcpy(global_recipe_time_8,m_char_to_float);
		}
	}
}

void CCasc_03_recipe::OnSetfocusEditTime9() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_time_9;
	global_num_id=349;//3为配方，2为pin，0为DR
//	CCASC_05Dlg reciepe_dlg;
	HWND hwnd=m_recipe_time_9.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_091_num_keyboard num_keyboard;
	if(m_nOperate==1 || m_nOperate==2)
	{
		num_keyboard.DoModal();
		global_opr_num_key = RECIPE_TIME_9;
		//数字键盘数据输入编辑框
		if(global_status_num_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_9);
			z_mEdit->SetWindowText(test);
	//		reciepe_dlg.Char_To_Float();//浮点数转换
			global_status_num_key=0;
	//		strcpy(global_recipe_time_9,m_char_to_float);
		}
	}
}


void CCasc_03_recipe::On_z_SetValue_numberkey()
{
	switch(global_opr_num_key)
	{
	case RECIPE_ROT_SPD_DR: {break;}
	case RECIPE_ROT_SPD_1: {break;}
	case RECIPE_ROT_SPD_2: {break;}
	case RECIPE_ROT_SPD_3: {break;}
	case RECIPE_ROT_SPD_4: {break;}
	case RECIPE_ROT_SPD_5: {break;}
	case RECIPE_ROT_SPD_6: {break;}
	case RECIPE_ROT_SPD_7: {break;}
	case RECIPE_ROT_SPD_8: {break;}
	case RECIPE_ROT_SPD_9: {break;}
	case RECIPE_PIN_POS_DR: {break;}
	case RECIPE_PIN_POS_1: {break;}
	case RECIPE_PIN_POS_2: {break;}
	case RECIPE_PIN_POS_3: {break;}
	case RECIPE_PIN_POS_4: {break;}
	case RECIPE_PIN_POS_5: {break;}
	case RECIPE_PIN_POS_6: {break;}
	case RECIPE_PIN_POS_7: {break;}
	case RECIPE_PIN_POS_8: {break;}
	case RECIPE_PIN_POS_9: {break;}
	case RECIPE_SLV_POS_DR: {break;}
	case RECIPE_SLV_POS_1: {break;}
	case RECIPE_SLV_POS_2: {break;}
	case RECIPE_SLV_POS_3: {break;}
	case RECIPE_SLV_POS_4: {break;}
	case RECIPE_SLV_POS_5: {break;}
	case RECIPE_SLV_POS_6: {break;}
	case RECIPE_SLV_POS_7: {break;}
	case RECIPE_SLV_POS_8: {break;}
	case RECIPE_SLV_POS_9: {break;}
	case RECIPE_TIME_1: {break;}
	case RECIPE_TIME_2: {break;}
	case RECIPE_TIME_3: {break;}
	case RECIPE_TIME_4: {break;}
	case RECIPE_TIME_5: {break;}
	case RECIPE_TIME_6: {break;}
	case RECIPE_TIME_7: {break;}
	case RECIPE_TIME_8: {break;}
	case RECIPE_TIME_9: {break;}
	}
}
//配方名输入
void CCasc_03_recipe::OnSetfocusEditRecipe() 
{
	// TODO: Add your control notification handler code here
	CEdit * z_mEdit;
	CCasc_03_recipe m_recipe_name;
	HWND hwnd=m_recipe_name.m_hWnd;
	::SetFocus(::GetWindow(hwnd,GW_HWNDNEXT));
	CCasc_092_char_keyboard num_keyboard;
	if(m_nOperate==1)
	{
		num_keyboard.DoModal();
		//global_opr_num_key = RECIPE_PIN_POS_1;
		//字符键盘数据输入编辑框
		if(global_status_char_key==1)
		{
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_RECIPE);
			z_mEdit->SetWindowText(char_test);
			global_status_char_key=0;
		}
		else if(global_status_char_key==2)
		{
			char_test.Empty();
			z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_RECIPE);
			z_mEdit->SetWindowText(char_test);
			global_status_char_key=0;
		}
	}
	
}

//DEL void CCasc_03_recipe::Char_To_Float()
//DEL {
//DEL 
//DEL }

void CCasc_03_recipe::OnButtonAct() 
{
	// TODO: Add your control notification handler code here
	//CEdit * z_mEdit;
	CCASC_05Dlg reciepe_dlg;
	/*
	z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_1);
	z_mEdit->SetWindowText(test);
	reciepe_dlg.Char_To_Float();//浮点数转换
	global_status_num_key=0;
	strcpy(global_recipe_time_1,m_char_to_float);
	z_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_TIME_2);
	z_mEdit->SetWindowText(test);
	reciepe_dlg.Char_To_Float();//浮点数转换
	global_status_num_key=0;
	strcpy(global_recipe_time_2,m_char_to_float);
	//FreshList();
	*/

	int nItem = m_list_recipe.GetSelectionMark();
	if(nItem == -1) return;
	m_edit_recipe = m_list_recipe.GetItemText(nItem, 0);
	global_recipe_name = m_edit_recipe;

	for(int i=0;i<=9;i++)
	{
		global_edit_rot[i]= atof(m_list_recipe.GetItemText(nItem, i+1));
		global_i_char_to_float=1+i;
		reciepe_dlg.Char_To_Float();//浮点数转换
		strcpy(global_recipe_rot_spd[i],m_char_to_float);
	}
	for(int j=0;j<=9;j++)
	{
		global_edit_pin[j]= atof(m_list_recipe.GetItemText(nItem, j+11));
		global_i_char_to_float=11+j;
		reciepe_dlg.Char_To_Float();//浮点数转换
		strcpy(global_recipe_pin_pos[j],m_char_to_float);
		if(j==0){global_pin_latch=global_recipe_pin_pos[0][0];}
	}
	for(int k=0;k<=9;k++)
	{
		global_edit_slv[k]= atof(m_list_recipe.GetItemText(nItem, k+21));
		global_i_char_to_float=21+k;
		reciepe_dlg.Char_To_Float();//浮点数转换
		strcpy(global_recipe_slv_pos[k],m_char_to_float);
		if(k==0){global_slv_latch=global_recipe_slv_pos[0][0];}
	}
	for(int l=0;l<=9;l++)
	{
		global_edit_time[l]= atof(m_list_recipe.GetItemText(nItem, l+31));
		global_i_char_to_float=31+l;
		reciepe_dlg.Char_To_Float();//浮点数转换
		strcpy(global_recipe_time[l],m_char_to_float);
	}
	//for(global_m=0;global_m<=3;global_m++)
	//{
		//global_opr_wr_rd=RECIEPE_SAVE;
		//PostThreadMessage(m_dwThreadId_Wr, WM_UM_RECIEPE_SAVE, NULL, NULL);
	//}
	global_m=0;
	global_opr_wr_rd=RECIEPE_SAVE;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_RECIEPE_SAVE1, NULL, NULL);
	//global_m=1;
	//global_opr_wr_rd=RECIEPE_SAVE;
	//PostThreadMessage(m_dwThreadId_Wr, WM_UM_RECIEPE_SAVE2, NULL, NULL);
	//global_m=2;
	//global_opr_wr_rd=RECIEPE_SAVE;
	//PostThreadMessage(m_dwThreadId_Wr, WM_UM_RECIEPE_SAVE3, NULL, NULL);
	//global_m=3;
	//global_opr_wr_rd=RECIEPE_SAVE;
	//PostThreadMessage(m_dwThreadId_Wr, WM_UM_RECIEPE_SAVE4, NULL, NULL);
}

void CCasc_03_recipe::OnAlarm5() 
{
	// TODO: Add your control notification handler code here
	CCasc_200_alarm auto_200_alarm5;
	auto_200_alarm5.DoModal();
}
