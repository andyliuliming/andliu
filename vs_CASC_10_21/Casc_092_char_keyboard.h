#if !defined(AFX_CASC_092_CHAR_KEYBOARD_H__0EDB677A_DCCF_4E77_A882_8DACDB36C68F__INCLUDED_)
#define AFX_CASC_092_CHAR_KEYBOARD_H__0EDB677A_DCCF_4E77_A882_8DACDB36C68F__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_092_char_keyboard.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_092_char_keyboard dialog
//ȫ�ֱ���
extern CString char_test;
//�ַ�����ȷ����ȡ��״̬
extern int global_status_char_key;//0�޲���1ȷ��2ȡ��
class CCasc_092_char_keyboard : public CDialog
{
// Construction
public:
	bool g_bInIP_char;
	CEdit * g_mEdit_char;
	CCasc_092_char_keyboard(CWnd* pParent = NULL);   // standard constructor
	
// Dialog Data
	//{{AFX_DATA(CCasc_092_char_keyboard)
	enum { IDD = IDD_CHAR_KEYBOARD };
	CEdit	m_char_keyboard_set;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_092_char_keyboard)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_092_char_keyboard)
	virtual BOOL OnInitDialog();
	virtual void OnOK();
	virtual void OnCancel();
	afx_msg void OnNumberKey(UINT nID);
	afx_msg void OnFocusChange (UINT nID);
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_092_CHAR_KEYBOARD_H__0EDB677A_DCCF_4E77_A882_8DACDB36C68F__INCLUDED_)
