#if !defined(AFX_CASC_101_ROBOT_H__FB7AD410_0CB5_485D_AB37_4E68DC7B80F5__INCLUDED_)
#define AFX_CASC_101_ROBOT_H__FB7AD410_0CB5_485D_AB37_4E68DC7B80F5__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_101_robot.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_101_robot dialog

class CCasc_101_robot : public CDialog
{
// Construction
public:
	CCasc_101_robot(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_101_robot)
	enum { IDD = IDD_ROBOT_1 };
		// NOTE: the ClassWizard will add data members here
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_101_robot)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_101_robot)
		// NOTE: the ClassWizard will add member functions here
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_101_ROBOT_H__FB7AD410_0CB5_485D_AB37_4E68DC7B80F5__INCLUDED_)
