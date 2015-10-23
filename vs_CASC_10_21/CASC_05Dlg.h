// CASC_05Dlg.h : header file
//

#if !defined(AFX_CASC_05DLG_H__0C5EEC68_48AE_4B09_92B8_E3A80CA09D17__INCLUDED_)
#define AFX_CASC_05DLG_H__0C5EEC68_48AE_4B09_92B8_E3A80CA09D17__INCLUDED_

#include "Casc_01_jog.h"	// Added by ClassView
#include "Casc_04_sys.h"	// Added by ClassView
#include "Casc_03_recipe.h"	// Added by ClassView
#include "Casc_02_auto.h"	// Added by ClassView
#include <afxmt.h>//增加CEvent类的头文件
#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

//网络通讯用
#include "winsock2.h"
#pragma comment (lib,"ws2_32.lib")
#include <stdio.h>

#define BUF_SIZE 300 //缓冲存储器规格
#define FLAG_OFF 0  //完成标志OFF
#define FLAG_ON  1  //完成标志ON
#define SOCK_OK  0  //正常完成
#define SOCK_NG  -1 //异常完成
//静态变量定义
static int m_client_static;
//静态全局变量引用
extern char r_buf_static[BUF_SIZE];
extern char s_buf_static[BUF_SIZE];
extern char r_buf_alarm[36];

//全局变量
extern int left;
extern int right;
extern int top;
extern int bottom;
//线程运行控制用状态量与触发事件变量
extern int thread_status;
//extern CEvent global_m_Event(FALSE,FALSE);
//模式切换
extern int global_mode;
//手动
extern int global_jog_brk_status;
extern int global_jog_col_status;
extern int global_jog_gas_status;
extern char m_char_to_float[8];
//数字键盘操作模式输入========================与PLC字寄存器有关
extern int global_opr_num_key;//0无操作
/////////////////////////////////////////////////////////////////////////////
// CCASC_05Dlg dialog

class CCASC_05Dlg : public CDialog
{
// Construction
private:
    int length = 0;
    int k = 0;
    const char alarm_safe[59] = "D00000FF03FF0000280000000000000000000000000000000000000000";
    const char alarm_safe_m[30] = "D00000FF03FF00000B00001110010";
    const char *CMD_STR_1 = "500000FF03FF000018000A04010000D*0035000009";
    int CMD_STR_1_LEN = 0;

public:
    void InitializeCommand();
	void Char_To_Int();
	void Float_To_Char();
	void Char_To_Float();
	char s_buf[BUF_SIZE];
	char r_buf[BUF_SIZE];
	void Msg_WR();
	void Msg_RD();
	int nErrorStatus;
	void Sockerror(int error_kind);
	SOCKET m_client;
	CCasc_01_jog m_jog;
	CCasc_02_auto m_auto;
	CCasc_04_sys m_sys;
	CCasc_03_recipe m_recipe;
	CCASC_05Dlg(CWnd* pParent = NULL);	// standard constructor
	
// Dialog Data
	//{{AFX_DATA(CCASC_05Dlg)
	enum { IDD = IDD_CASC_05_DIALOG };
		// NOTE: the ClassWizard will add data members here
	//}}AFX_DATA

	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCASC_05Dlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV support
	virtual void PostNcDestroy();
	//}}AFX_VIRTUAL

// Implementation
protected:
	//DWORD m_dwThreadId_Wr;
	//HANDLE m_hThread_Wr;
	//DWORD m_dwThreadId_Rd;
	//HANDLE m_hThread_Rd;
	HICON m_hIcon;

	// Generated message map functions
	//{{AFX_MSG(CCASC_05Dlg)
	virtual BOOL OnInitDialog();
	afx_msg void OnSysCommand(UINT nID, LPARAM lParam);
	afx_msg void OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	afx_msg void OnCascAuto();
	afx_msg void OnCascJog();
	afx_msg void OnCascRecipe();
	afx_msg void OnCascSys();
	afx_msg void OnFull();
	afx_msg void OnShowWindow(BOOL bShow, UINT nStatus);
	afx_msg int OnCreate(LPCREATESTRUCT lpCreateStruct);
	afx_msg void OnCascAux1();
	virtual void OnOK();
	afx_msg void OnLink();
	afx_msg void OnCascRobot();
	afx_msg void OnCascConstRot();
	afx_msg void OnAlarm1();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_05DLG_H__0C5EEC68_48AE_4B09_92B8_E3A80CA09D17__INCLUDED_)
