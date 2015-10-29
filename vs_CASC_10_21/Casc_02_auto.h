#if !defined(AFX_CASC_02_AUTO_H__22155816_5E9D_4EBC_BBEE_707E400504F7__INCLUDED_)
#define AFX_CASC_02_AUTO_H__22155816_5E9D_4EBC_BBEE_707E400504F7__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_02_auto.h : header file
//
#include "BmpProgressEx.h"
/////////////////////////////////////////////////////////////////////////////
// CCasc_02_auto dialog

class CCasc_02_auto : public CDialog
{
// Construction
public:
	HICON hback_8;
	HICON hfront_8;
	HICON hback_7;
	HICON hfront_7;
	HICON hback_6;
	HICON hfront_6;
	HICON hback_3;
	HICON hfront_3;
	HICON hback_2;
	HICON hfront_2;
	HICON hback_1;
	HICON hfront_1;
	CCasc_02_auto(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_02_auto)
	enum { IDD = IDD_CASC_AUTO };
	CStatic	m_auto_moni_8;
	CStatic	m_auto_moni_7;
	CStatic	m_auto_moni_6;
	CStatic	m_auto_moni_3;
	CStatic	m_auto_moni_2;
	CStatic	m_auto_moni_1;

	CString m_recipe_name;

	CBmpProgressEx	m_02_auto_slv_pin;
	float	m_auto_rot_spd_dis;
	float   m_auto_torque_dis;
	float	m_auto_slv_dis;
	float	m_auto_pin_dis;
	float	m_weild_counter;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_02_auto)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_02_auto)
	afx_msg void OnAutoMonitor();
	virtual void OnOK();
	afx_msg void OnAutoDrOpen();
	afx_msg void OnAutoDrClose();
	afx_msg void OnAutoCancle();
	virtual BOOL OnInitDialog();
	afx_msg void OnTimer(UINT nIDEvent);
	afx_msg void OnAlarm4();
	afx_msg void OnCntZero();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
public:
	afx_msg void OnEnChangeAutoRot();
	afx_msg void OnEnChangeAutoTorque();
	afx_msg void OnEnChangeWeildCounter();
	afx_msg void OnEnchangeRecipeName();
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_02_AUTO_H__22155816_5E9D_4EBC_BBEE_707E400504F7__INCLUDED_)
