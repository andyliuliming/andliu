#if !defined(AFX_CASC_041_SYS_MECH_H__A9A202DA_AA78_4B2E_8C9B_1D40E577516F__INCLUDED_)
#define AFX_CASC_041_SYS_MECH_H__A9A202DA_AA78_4B2E_8C9B_1D40E577516F__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_041_sys_mech.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_041_sys_mech dialog

class CCasc_041_sys_mech : public CDialog
{
// Construction
public:
	CCasc_041_sys_mech(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_041_sys_mech)
	enum { IDD = IDD_CASC_SYS_MECH };
		// NOTE: the ClassWizard will add data members here
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_041_sys_mech)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_041_sys_mech)
	afx_msg void OnSetfocusEditPinDiamter();
	afx_msg void OnSetfocusEditSlvDiameter();
	afx_msg void OnSetfocusEditRotCurLim();
	afx_msg void OnSetfocusEditPinCurLim();
	afx_msg void OnSetfocusEditSlvCurLim();
	afx_msg void OnAlarm41();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_041_SYS_MECH_H__A9A202DA_AA78_4B2E_8C9B_1D40E577516F__INCLUDED_)
