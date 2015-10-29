// CASC_05.h : main header file for the CASC_05 application
//

#if !defined(AFX_CASC_05_H__4D350FAB_CC7B_4424_81DC_24D5669A16AB__INCLUDED_)
#define AFX_CASC_05_H__4D350FAB_CC7B_4424_81DC_24D5669A16AB__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#ifndef __AFXWIN_H__
	#error include 'stdafx.h' before including this file for PCH
#endif

#include "resource.h"		// main symbols
#include "CASC_05_i.h"
//��������===================================================================
//���ּ��̲�����������//Ϊ0�޲���
#define JOG_ROT_SPD_SET 1//�ֶ�
#define JOG_SLV_POS_SET 2
#define JOG_PIN_POS_SET 3
#define JOG_PIN_SLV_UD_SET 4
#define RECIPE_ROT_SPD_DR 5//�䷽
#define RECIPE_ROT_SPD_1  6
#define RECIPE_ROT_SPD_2  7
#define RECIPE_ROT_SPD_3  8
#define RECIPE_ROT_SPD_4  9
#define RECIPE_ROT_SPD_5  10
#define RECIPE_ROT_SPD_6  11
#define RECIPE_ROT_SPD_7  12
#define RECIPE_ROT_SPD_8  13
#define RECIPE_ROT_SPD_9  14
#define RECIPE_PIN_POS_DR 15
#define RECIPE_PIN_POS_1  16
#define RECIPE_PIN_POS_2  17
#define RECIPE_PIN_POS_3  18
#define RECIPE_PIN_POS_4  19
#define RECIPE_PIN_POS_5  20
#define RECIPE_PIN_POS_6  21
#define RECIPE_PIN_POS_7  22
#define RECIPE_PIN_POS_8  23
#define RECIPE_PIN_POS_9  24
#define RECIPE_SLV_POS_DR 25
#define RECIPE_SLV_POS_1  26
#define RECIPE_SLV_POS_2  27
#define RECIPE_SLV_POS_3  28
#define RECIPE_SLV_POS_4  29
#define RECIPE_SLV_POS_5  30
#define RECIPE_SLV_POS_6  31
#define RECIPE_SLV_POS_7  32
#define RECIPE_SLV_POS_8  33
#define RECIPE_SLV_POS_9  34
#define RECIPE_TIME_1     35
#define RECIPE_TIME_2     36
#define RECIPE_TIME_3     37
#define RECIPE_TIME_4     38
#define RECIPE_TIME_5     39
#define RECIPE_TIME_6     40
#define RECIPE_TIME_7     41
#define RECIPE_TIME_8     42
#define RECIPE_TIME_9     43
//�����ڰ�������
#define MAIN_JOG_MODE     44
#define MAIN_AUTO_MODE    45
#define MAIN_RECIPE       46
//�ֶ�ģʽ��������
#define JOG_BACK_MAIN     47
#define JOG_ROT_START     48//������ת����
#define JOG_ROT_START_2   90//���ᷴת����
#define JOG_ROT_LINK      49//��������
#define JOG_SLV_LINK      50//����������
#define JOG_SLV_UP        51//�����������˶�
#define JOG_SLV_DN        52//�����������˶�
#define JOG_PIN_UP        53//�����������˶�
#define JOG_PIN_DN        54//�����������˶�
#define JOG_SLV_UP_STOP   55//�����������˶�
#define JOG_SLV_DN_STOP   56//�����������˶�
#define JOG_PIN_UP_STOP   57//�����������˶�
#define JOG_PIN_DN_STOP   58//�����������˶�
#define JOG_BRK_OPEN      59//�ƶ�װ�ô�
#define JOG_COL_OPEN      60//��ȴװ�ô�
#define JOG_GAS_OPEN      61//Һѹ�״�
#define JOG_CNT_CLEAR     62//����������
#define JOG_MONITOR_AXIS  63//�����������趨
//�Զ�ģʽ��������
#define AUTO_BACK_MAIN    64
#define AUTO_DR_OPEN      65//��ʼ��ת
#define AUTO_DR_CLOSE     66//��ʼ��ת�ر�
#define AUTO_CANCLE       67//�ӹ�ȡ��
#define AUTO_CNT_ZERO     68//����������
//�䷽����
#define RECIEPE_SAVE      69//�䷽����
//��������
#define AUX_CONST_ROT     70//������ת
#define AUX_CLEAR         71//��������
#define AUX_CLEAR1        72//��������1
#define AUX_CLEAR2        73//��������2
#define AUX_FINI          74//�����������
#define AUX_ALIGN_START   75//�Զ��Ե���ʼ
#define AUX_ALIGN_CONFIRM 76//�Զ��Ե�ȷ��
#define AUX_ALIGN_BACK    77//�Զ��Ե�����
#define AUX_ALIGN_ENTER   78//�Զ��Ե�����
#define JOG_AXIS_SET      79//���������趨
#define AUX_HOME_START    80//��ԭ������
#define AUX_GAS_OPEN	  81//��ԭ��������
#define AUX_HOME_PIN	  82//�������ԭ��
#define AUX_HOME_SLV	  83//�����׻�ԭ��
#define AUX_HOME_BACK     84//��ԭ�㷵��
#define AUX_FUNC		  85//��������
//����
#define ALARM_LIST        86
#define ALARM_LED         87
#define ALARM_LED_S       88
#define ALARM_LIST_1      89

//����ͨѶ��ϡ�����������궨��
#define ERROR_INITIAL  0 //��ʼ������
#define ERROR_SOCKET   1 //�׽��ִ�������
#define ERROR_BIND     2 //������
#define ERROR_CONNECT  3 //���ӳ���
#define ERROR_SEND     4 //���ͳ���
#define ERROR_RECEIVE  5 //���ճ���
#define ERROR_SHUTDOWN 6 //�ػ�����
#define ERROR_CLOSE    7 //��·�رճ���
//�Զ�����Ϣ
#define WM_UM_JOG_MODE			  WM_USER+0x100//�ֶ�ģʽ����
#define WM_UM_JOG_ROT_START		  WM_USER+0x101//�ֶ�������ת���
#define WM_UM_JOG_ROT_START_2     WM_USER+0x190//�ֶ�������ת���
#define WM_UM_JOG_ROT_SPD_SET	  WM_USER+0x102//�ֶ�������ת����ٶ��趨
#define WM_UM_JOG_SLV_POS_SET	  WM_USER+0x103//�ֶ�������Ŀ��λ���趨
#define WM_UM_JOG_PIN_POS_SET	  WM_USER+0x104//�ֶ�������Ŀ��λ���趨
#define WM_UM_JOG_PIN_SLV_UD_SET  WM_USER+0x105//�ֶ������������׽��������
#define WM_UM_JOG_BRK_OPEN		  WM_USER+0x106//�ֶ����ӡ����ƶ�ɲ��
#define WM_UM_JOG_COL_OPEN		  WM_USER+0x107//�ֶ����ӡ�����ȴ��
#define WM_UM_JOG_GAS_OPEN		  WM_USER+0x108//�ֶ����ӡ���Һѹ��
#define WM_UM_JOG_BTN_SLV_UP      WM_USER+0x109//�ֶ������װ�ť���˶�
#define WM_UM_JOG_BTN_SLV_DN      WM_USER+0x110//�ֶ������װ�ť���˶�
#define WM_UM_JOG_BTN_PIN_UP      WM_USER+0x111//�ֶ������밴ť���˶�
#define WM_UM_JOG_BTN_PIN_DN      WM_USER+0x112//�ֶ������밴ť���˶�
#define WM_UM_JOG_BTN_SLV_UP_STOP WM_USER+0x113//�ֶ������װ�ť���˶�
#define WM_UM_JOG_BTN_SLV_DN_STOP WM_USER+0x114//�ֶ������װ�ť���˶�
#define WM_UM_JOG_BTN_PIN_UP_STOP WM_USER+0x115//�ֶ������밴ť���˶�
#define WM_UM_JOG_BTN_PIN_DN_STOP WM_USER+0x116//�ֶ������밴ť���˶�
#define WM_UM_JOG_ROT_LINK        WM_USER+0x117//�ֶ���������ת����
#define WM_UM_JOG_SLV_LINK        WM_USER+0x118//�ֶ���������������
#define WM_UM_JOG_MODE_END		  WM_USER+0x119//�ֶ�ģʽ�˳�
#define WM_UM_AUTO_MODE			  WM_USER+0x120//�Զ�ģʽ����
#define WM_UM_AUTO_MODE_END		  WM_USER+0x121//�Զ�ģʽ�˳�
#define WM_UM_AUTO_DR_OPEN		  WM_USER+0x122//�Զ�����DR��ʼ
#define WM_UM_AUTO_DR_CLOSE		  WM_USER+0x123//�Զ�����DR����
#define WM_UM_AUTO_CANCLE		  WM_USER+0x124//�Զ������ӹ�ȡ��
#define WM_UM_CNT_ZERO            WM_USER+0x125//�Զ���������������

#define WM_UM_RECIEPE_SAVE1		  WM_USER+0x126//�䷽����
#define WM_UM_RECIEPE_SAVE2		  WM_USER+0x127//�䷽����
#define WM_UM_RECIEPE_SAVE3		  WM_USER+0x128//�䷽����
#define WM_UM_RECIEPE_SAVE4		  WM_USER+0x129//�䷽����

#define WM_UM_AUX_CONST_ROT       WM_USER+0x130//�������ܡ���������ת
#define WM_UM_AUX_CLEAR1		  WM_USER+0x131//�������ܡ�����ϴ1
#define WM_UM_AUX_CLEAR2		  WM_USER+0x132//�������ܡ�����ϴ2
#define WM_UM_AUX_FINI			  WM_USER+0x133//�������ܡ�����ϴ2
#define WM_UM_AUX_ALIGN_START	  WM_USER+0x134//�������ܡ����Զ��Ե���ʼ
#define WM_UM_AUX_ALIGN_CONFIRM	  WM_USER+0x135//�������ܡ����Զ��Ե�ȷ��
#define WM_UM_AUX_ALIGN_BACK	  WM_USER+0x136//�������ܡ����Զ��Ե�����
#define WM_UM_AUX_ALIGN_ENTER	  WM_USER+0x137//�������ܡ��������Զ��Ե�
//#define WM_UM_AUX_ALIGN_ENTER	  WM_USER+0x137//�������ܡ��������Զ��Ե�
#define WM_UM_JOG_AXIS_SET        WM_USER+0x138//�������ܡ��������趨
#define WM_UM_AUX_HOME_START	  WM_USER+0x139//�������ܡ��������ԭ�㿪ʼ
#define WM_UM_AUX_HOME_PIN		  WM_USER+0x140//�������ܡ���PIN�����ԭ��
#define WM_UM_AUX_HOME_SLV		  WM_USER+0x141//�������ܡ���SLV�����ԭ��
#define WM_UM_AUX_HOME_GAS		  WM_USER+0x142//�������ܡ��������ԭ��������
#define WM_UM_AUX_HOME_BACK		  WM_USER+0x143//�������ܡ�����ԭ�㷵��
//����ȷ��
#define WM_UM_ALARM_OK			  WM_USER+0x144//����ȷ��
#define WM_UM_ALARM_LED			  WM_USER+0x145//��������˸
#define WM_UM_ALARM_LED_S		  WM_USER+0x146//��������˸��
/////////////////////////////////////////////////////////////////////////////
// CCASC_05App:
// See CASC_05.cpp for the implementation of this class
//

class CCASC_05App : public CWinApp
{
public:
	CCASC_05App();

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCASC_05App)
	public:
	virtual BOOL InitInstance();
		virtual int ExitInstance();
	//}}AFX_VIRTUAL

// Implementation

	//{{AFX_MSG(CCASC_05App)
		// NOTE - the ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
private:
	BOOL m_bATLInited;
private:
	BOOL InitATL();
};


/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_05_H__4D350FAB_CC7B_4424_81DC_24D5669A16AB__INCLUDED_)
