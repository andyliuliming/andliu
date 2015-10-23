#if !defined(AFX_CASC_091_NUM_KEYBOARD_H__59F64715_E134_4C3E_BBB1_B618C4FDDD7F__INCLUDED_)
#define AFX_CASC_091_NUM_KEYBOARD_H__59F64715_E134_4C3E_BBB1_B618C4FDDD7F__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_091_num_keyboard.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_091_num_keyboard dialog

//操作模式输入
extern int global_opr_num_key;//0无操作

extern CString test;
//数字键盘确认与取消状态
extern int global_status_num_key;//0无操作1确认2取消

class CCasc_091_num_keyboard : public CDialog
{
// Construction
public:
	CString test_last;
	CEdit * g_mEdit;
	
	bool g_bInIP;
	
	CCasc_091_num_keyboard(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_091_num_keyboard)
	enum { IDD = IDD_NUM_KEYBOARD };
	CEdit	m_num_keyboard_set;
	float	m_num_max;
	float	m_num_min;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_091_num_keyboard)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_091_num_keyboard)
	virtual void OnOK();
	virtual BOOL OnInitDialog();
	afx_msg void OnNumberKey(UINT nID);
	afx_msg void OnFocusChange (UINT nID);
	virtual void OnCancel();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_091_NUM_KEYBOARD_H__59F64715_E134_4C3E_BBB1_B618C4FDDD7F__INCLUDED_)
