// Casc_092_char_keyboard.cpp : implementation file
//

#include "stdafx.h"
#include "casc_05.h"
#include "Casc_092_char_keyboard.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CCasc_092_char_keyboard dialog


CCasc_092_char_keyboard::CCasc_092_char_keyboard(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_092_char_keyboard::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_092_char_keyboard)
		// NOTE: the ClassWizard will add member initialization here
	//}}AFX_DATA_INIT
}


void CCasc_092_char_keyboard::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_092_char_keyboard)
	DDX_Control(pDX, IDC_EDIT_CHAR_KEYBOARD_SET, m_char_keyboard_set);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_092_char_keyboard, CDialog)
	//{{AFX_MSG_MAP(CCasc_092_char_keyboard)
	ON_COMMAND_RANGE(IDC_BUT_CHAR_1, 1177, OnNumberKey)
	ON_COMMAND_RANGE(1128, 1146, OnNumberKey)
	ON_CONTROL_RANGE(EN_KILLFOCUS,IDC_EDIT_CHAR_KEYBOARD_SET, IDC_EDIT_CHAR_KEYBOARD_SET, OnFocusChange )
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()
//ON_COMMAND_RANGE(IDC_BUT_CHAR_1, IDC_BUT_CHAR_43, OnNumberKey)
/////////////////////////////////////////////////////////////////////////////
// CCasc_092_char_keyboard message handlers

BOOL CCasc_092_char_keyboard::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	g_bInIP_char=FALSE;
	g_mEdit_char=(CEdit *)GetDlgItem(IDC_EDIT_CHAR_KEYBOARD_SET);
	char_test.Empty();
	//char_test.Insert(0,"0");
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CCasc_092_char_keyboard::OnOK() 
{
	// TODO: Add extra validation here
	global_status_char_key=1;//键盘确认
	CDialog::OnOK();
}

void CCasc_092_char_keyboard::OnCancel() 
{
	// TODO: Add extra cleanup here
	global_status_char_key=2;
	CDialog::OnCancel();
}

void CCasc_092_char_keyboard::OnNumberKey(UINT nID)
{
	// TODO: Add your control notification handler code here
	//CCasc_091_num_keyboard m_k_dlg;
	//m_k_dlg.GetDlgItem(IDC_EDIT_NUM_KEYBOARD_SET);
	//m_k_dlg.SetFocus();
	
	//CString test;
	int i_Sel,i_Endsel;
	g_mEdit_char->GetSel(i_Sel,i_Endsel);//得到光标位置
	g_mEdit_char->GetWindowText(char_test);	
	char_test.Delete(i_Sel,i_Endsel-i_Sel);
	switch(nID)
	{/* 在光标位置插入按钮表示的字符*/
	case IDC_BUT_CHAR_1:{ char_test.Insert(i_Sel,"1");break;}
	case IDC_BUT_CHAR_2:{ char_test.Insert(i_Sel,"2");break;}
	case IDC_BUT_CHAR_3:{ char_test.Insert(i_Sel,"3");break;}
	case IDC_BUT_CHAR_4:{ char_test.Insert(i_Sel,"4");break;}
	case IDC_BUT_CHAR_5:{ char_test.Insert(i_Sel,"5");break;}
	case IDC_BUT_CHAR_6:{ char_test.Insert(i_Sel,"6");break;}
	case IDC_BUT_CHAR_7:{ char_test.Insert(i_Sel,"7");break;}
	case IDC_BUT_CHAR_8:{ char_test.Insert(i_Sel,"8");break;}
	case IDC_BUT_CHAR_9:{ char_test.Insert(i_Sel,"9");break;}
   	case IDC_BUT_CHAR_42:{ char_test.Insert(i_Sel,"0");break;}
	case IDC_BUT_CHAR_43:{ char_test.Insert(i_Sel,"Q");break;}//1168
	case IDC_BUT_CHAR_44:{ char_test.Insert(i_Sel,"W");break;}
	case IDC_BUT_CHAR_45:{ char_test.Insert(i_Sel,"E");break;}
	case IDC_BUT_CHAR_46:{ char_test.Insert(i_Sel,"R");break;}
	case IDC_BUT_CHAR_47:{ char_test.Insert(i_Sel,"T");break;}
	case IDC_BUT_CHAR_48:{ char_test.Insert(i_Sel,"Y");break;}
	case IDC_BUT_CHAR_76:{ char_test.Insert(i_Sel,"U");break;}
	case IDC_BUT_CHAR_77:{ char_test.Insert(i_Sel,"I");break;}
	case IDC_BUT_CHAR_79:{ char_test.Insert(i_Sel,"O");break;}
	case IDC_BUT_CHAR_82:{ char_test.Insert(i_Sel,"P");break;}
	case IDC_BUT_CHAR_83:{ char_test.Insert(i_Sel,"A");break;}
	case IDC_BUT_CHAR_84:{ char_test.Insert(i_Sel,"S");break;}
	case IDC_BUT_CHAR_85:{ char_test.Insert(i_Sel,"D");break;}
	case IDC_BUT_CHAR_86:{ char_test.Insert(i_Sel,"F");break;}
	case IDC_BUT_CHAR_87:{ char_test.Insert(i_Sel,"G");break;}
	case IDC_BUT_CHAR_88:{ char_test.Insert(i_Sel,"H");break;}
	case IDC_BUT_CHAR_89:{ char_test.Insert(i_Sel,"J");break;}
	case IDC_BUT_CHAR_90:{ char_test.Insert(i_Sel,"K");break;}
	case IDC_BUT_CHAR_91:{ char_test.Insert(i_Sel,"L");break;}
	case IDC_BUT_CHAR_92:{ char_test.Insert(i_Sel,"Z");break;}
	case IDC_BUT_CHAR_93:{ char_test.Insert(i_Sel,"X");break;}
	case IDC_BUT_CHAR_94:{ char_test.Insert(i_Sel,"C");break;}
	case IDC_BUT_CHAR_95:{ char_test.Insert(i_Sel,"V");break;}
	case IDC_BUT_CHAR_96:{ char_test.Insert(i_Sel,"B");break;}
	case IDC_BUT_CHAR_97:{ char_test.Insert(i_Sel,"N");break;}
	case IDC_BUT_CHAR_98:{ char_test.Insert(i_Sel,"M");break;}
	case IDC_BUT_CHAR_99:{ char_test.Insert(i_Sel,"_");break;}
	case IDC_BUT_CHAR_100:{ char_test.Insert(i_Sel," ");break;}
	case IDC_BUT_CHAR_39:{ char_test.Delete(char_test.GetLength()-1,1);i_Sel--;break;}
	//default:break;
	}
	g_mEdit_char->SetWindowText(char_test);
	i_Sel++;  //光标后移
	UpdateData(FALSE);
    g_mEdit_char->SetSel(i_Sel,i_Sel); //更新光标后移位置
	UpdateData(FALSE);	
}
void CCasc_092_char_keyboard::OnFocusChange(UINT nID)
{
	// TODO: Add your control notification handler code here
	switch(nID)
	{
	case IDC_EDIT_NUM_KEYBOARD_SET:
		{
			g_mEdit_char=(CEdit *)GetDlgItem(IDC_EDIT_CHAR_KEYBOARD_SET);
			g_bInIP_char=TRUE;
			break;
		}

	//case IDC_EDIT_PORT:
		//{
			//g_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_PORT);
			//g_bInIP=FALSE;
			//break;
		//}

	default:
		g_mEdit_char=(CEdit *)GetDlgItem(IDC_EDIT_CHAR_KEYBOARD_SET);
	}
}
