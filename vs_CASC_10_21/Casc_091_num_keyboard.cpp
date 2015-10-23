// Casc_091_num_keyboard.cpp : implementation file
//

#include "stdafx.h"
#include "casc_05.h"
#include "CASC_05Dlg.h"
#include "Casc_091_num_keyboard.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif
extern int   global_num_id;
extern float global_pin_limit_dn;//pin����λ
extern float global_pin_limit_up;//pin����λ
extern float global_slv_limit_dn;//slv����λ
extern float global_slv_limit_up;//slv����λ
/////////////////////////////////////////////////////////////////////////////
// CCasc_091_num_keyboard dialog


CCasc_091_num_keyboard::CCasc_091_num_keyboard(CWnd* pParent /*=NULL*/)
	: CDialog(CCasc_091_num_keyboard::IDD, pParent)
{
	//{{AFX_DATA_INIT(CCasc_091_num_keyboard)
	m_num_max = 0.0f;
	m_num_min = 0.0f;
	//}}AFX_DATA_INIT
	switch(global_num_id)
	{
	case 14:{m_num_max=100;m_num_min=0;break;}//���׽���
	case 11:{m_num_max=3000;m_num_min=0;break;}//������ת
	case 13:{m_num_max=global_slv_limit_dn;m_num_min=global_slv_limit_up;break;}//�׼���
	case 12:{m_num_max=global_pin_limit_dn;m_num_min=global_pin_limit_up;break;}//�뼫��
	//�䷽���ݡ�����
	case 310:
	case 311:
	case 312:
	case 313:
	case 314:
	case 315:
	case 316:
	case 317:
	case 318:
	case 319:{m_num_max=3000;m_num_min=0;break;}//������ת
	//�䷽���ݡ�����
	case 320:
	case 321:
	case 322:
	case 323:
	case 324:
	case 325:
	case 326:
	case 327:
	case 328:
	case 329:{m_num_max=global_pin_limit_dn;m_num_min=global_pin_limit_up;break;}
	//�䷽���ݡ�����
	case 330:
	case 331:
	case 332:
	case 333:
	case 334:
	case 335:
	case 336:
	case 337:
	case 338:
	case 339:{m_num_max=global_slv_limit_dn;m_num_min=global_slv_limit_up;break;}
	//�䷽���ݡ���ʱ��
	case 341:
	case 342:
	case 343:
	case 344:
	case 345:
	case 346:
	case 347:
	case 348:
	case 349:{m_num_max=10;m_num_min=0;break;}
	default:break;
	}
	
}


void CCasc_091_num_keyboard::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CCasc_091_num_keyboard)
	DDX_Control(pDX, IDC_EDIT_NUM_KEYBOARD_SET, m_num_keyboard_set);
	DDX_Text(pDX, IDC_EDIT_NUM_MAX, m_num_max);
	DDX_Text(pDX, IDC_EDIT_NUM_MIN, m_num_min);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CCasc_091_num_keyboard, CDialog)
	//{{AFX_MSG_MAP(CCasc_091_num_keyboard)
	ON_COMMAND_RANGE(IDC_NUM_KEY_BOARD_1, IDC_NUM_KEY_BOARD_13, OnNumberKey)
	ON_CONTROL_RANGE(EN_KILLFOCUS,IDC_EDIT_NUM_KEYBOARD_SET, IDC_EDIT_NUM_KEYBOARD_SET, OnFocusChange )
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCasc_091_num_keyboard message handlers
void CCasc_091_num_keyboard::OnNumberKey(UINT nID)
{
	// TODO: Add your control notification handler code here
	//CCasc_091_num_keyboard m_k_dlg;
	//m_k_dlg.GetDlgItem(IDC_EDIT_NUM_KEYBOARD_SET);
	//m_k_dlg.SetFocus();
	
	
	int i_Sel,i_Endsel,i;
	g_mEdit->GetSel(i_Sel,i_Endsel);//�õ����λ��
	g_mEdit->GetWindowText(test);	
	test.Delete(i_Sel,i_Endsel-i_Sel);
	switch(nID)
	{/* �ڹ��λ�ò��밴ť��ʾ���ַ�*/
	case IDC_NUM_KEY_BOARD_1:{ test.Insert(i_Sel,"1");break;}
	case IDC_NUM_KEY_BOARD_2:{ test.Insert(i_Sel,"2");break;}
	case IDC_NUM_KEY_BOARD_3:{ test.Insert(i_Sel,"3");break;}
	case IDC_NUM_KEY_BOARD_4:{ test.Insert(i_Sel,"4");break;}
	case IDC_NUM_KEY_BOARD_5:{ test.Insert(i_Sel,"5");break;}
	case IDC_NUM_KEY_BOARD_6:{ test.Insert(i_Sel,"6");break;}
	case IDC_NUM_KEY_BOARD_7:{ test.Insert(i_Sel,"7");break;}
	case IDC_NUM_KEY_BOARD_8:{ test.Insert(i_Sel,"8");break;}
	case IDC_NUM_KEY_BOARD_9:{ test.Insert(i_Sel,"9");break;}
   	case IDC_NUM_KEY_BOARD_10:{	test.Insert(i_Sel,".");break;}
	case IDC_NUM_KEY_BOARD_11:{ test.Insert(i_Sel,"0");break;}
	case IDC_NUM_KEY_BOARD_12:{ test.Delete(test.GetLength()-1,1);i_Sel--;break;}
	case IDC_NUM_KEY_BOARD_13:{ test.Insert(i_Sel,"-");break;}
	default:break;
	}
	i=test.GetLength();
	g_mEdit->SetWindowText(test);
	i_Sel++;  //������
	UpdateData(FALSE);
    g_mEdit->SetSel(i_Sel,i_Sel); //���¹�����λ��
	UpdateData(FALSE);	
}
void CCasc_091_num_keyboard::OnFocusChange(UINT nID)
{
	// TODO: Add your control notification handler code here
	switch(nID)
	{
	case IDC_EDIT_NUM_KEYBOARD_SET:
		{
			g_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_NUM_KEYBOARD_SET);
			g_bInIP=TRUE;
			break;
		}

	default:
		g_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_NUM_KEYBOARD_SET);
	}
}

void CCasc_091_num_keyboard::OnOK() 
{
	// TODO: Add extra validation here
	int j;
	global_status_num_key=1;//����ȷ��
	j=test.GetLength();
	if(test.GetLength()==0){MessageBox("����ֵ����Ϊ�գ�");}//{test.Empty();test.Insert(0,"0");}
	//if(test.GetLength()==1){test.Empty();test.Insert(0,test_last);}
	CDialog::OnOK();
}

BOOL CCasc_091_num_keyboard::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	// TODO: Add extra initialization here
	g_bInIP=FALSE;
	g_mEdit=(CEdit *)GetDlgItem(IDC_EDIT_NUM_KEYBOARD_SET);
	//strcpy(&test,"0");
	
	test_last=test;
	test.Empty();
	test.Insert(0,"0");
	//g_mEdit->GetWindowText(test);
	//test.Replace("0");
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX Property Pages should return FALSE
}

void CCasc_091_num_keyboard::OnCancel() 
{
	// TODO: Add extra cleanup here
	int j;
	global_status_num_key=1;//����ȷ��
	test=test_last;
	j=test.GetLength();
	if(test.GetLength()==0){test.Empty();test.Insert(0,"0");}
	CDialog::OnCancel();
}
