#if !defined(AFX_CASC_042_SYS_PROCESS_H__98607A74_FED1_4F74_B4BF_6C40FC461911__INCLUDED_)
#define AFX_CASC_042_SYS_PROCESS_H__98607A74_FED1_4F74_B4BF_6C40FC461911__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_042_sys_process.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_042_sys_process dialog

class CCasc_042_sys_process : public CDialog
{
// Construction
public:
	CCasc_042_sys_process(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_042_sys_process)
	enum { IDD = IDD_CASC_SYS_PROCESS };
		// NOTE: the ClassWizard will add data members here
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_042_sys_process)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_042_sys_process)
		// NOTE: the ClassWizard will add member functions here
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_042_SYS_PROCESS_H__98607A74_FED1_4F74_B4BF_6C40FC461911__INCLUDED_)
