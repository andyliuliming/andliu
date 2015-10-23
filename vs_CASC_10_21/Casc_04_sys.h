#if !defined(AFX_CASC_04_SYS_H__C124A728_B6A2_426E_8138_1FBE76BB092C__INCLUDED_)
#define AFX_CASC_04_SYS_H__C124A728_B6A2_426E_8138_1FBE76BB092C__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_04_sys.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_04_sys dialog

class CCasc_04_sys : public CDialog
{
// Construction
public:
	CCasc_04_sys(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_04_sys)
	enum { IDD = IDD_CASC_SYS };
		// NOTE: the ClassWizard will add data members here
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_04_sys)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_04_sys)
	afx_msg void OnMech();
	afx_msg void OnProcess();
	afx_msg void OnSoft();
	afx_msg void OnAlarm4();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_04_SYS_H__C124A728_B6A2_426E_8138_1FBE76BB092C__INCLUDED_)
