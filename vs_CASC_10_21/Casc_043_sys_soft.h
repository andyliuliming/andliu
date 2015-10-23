#if !defined(AFX_CASC_043_SYS_SOFT_H__66CD70C5_5C7F_4DF0_A254_EF318242910A__INCLUDED_)
#define AFX_CASC_043_SYS_SOFT_H__66CD70C5_5C7F_4DF0_A254_EF318242910A__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_043_sys_soft.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_043_sys_soft dialog

class CCasc_043_sys_soft : public CDialog
{
// Construction
public:
	CCasc_043_sys_soft(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_043_sys_soft)
	enum { IDD = IDD_CASC_SYS_SOFT };
		// NOTE: the ClassWizard will add data members here
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_043_sys_soft)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_043_sys_soft)
	afx_msg void OnSysSdComputer();
	afx_msg void OnSYSwindowsxp();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_043_SYS_SOFT_H__66CD70C5_5C7F_4DF0_A254_EF318242910A__INCLUDED_)
