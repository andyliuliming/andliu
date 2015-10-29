#if !defined(AFX_CASC_021_AUTO_H__7C8DC996_8B3E_47E7_A6C5_1FFCDCD83C57__INCLUDED_)
#define AFX_CASC_021_AUTO_H__7C8DC996_8B3E_47E7_A6C5_1FFCDCD83C57__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_021_auto.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_021_auto dialog

class CCasc_021_auto : public CDialog
{
// Construction
public:
	CCasc_021_auto(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_021_auto)
	enum { IDD = IDD_CASC_AUTO_MONITOR };
		// NOTE: the ClassWizard will add data members here
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_021_auto)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_021_auto)
		// NOTE: the ClassWizard will add member functions here
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_021_AUTO_H__7C8DC996_8B3E_47E7_A6C5_1FFCDCD83C57__INCLUDED_)
