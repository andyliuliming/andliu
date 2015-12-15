#if !defined(AFX_CASC_06_AUX_H__BD2017E2_F36C_4057_B095_6CEA7D55EEBE__INCLUDED_)
#define AFX_CASC_06_AUX_H__BD2017E2_F36C_4057_B095_6CEA7D55EEBE__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_06_aux.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_06_aux dialog

class CCasc_06_aux : public CDialog
{
// Construction
public:
	CCasc_06_aux(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_06_aux)
	enum { IDD = IDD_CASC_AUX };
	float	m_aux_rot_spd_dis;
	float	m_aux_pin_dis;
	float	m_aux_slv_dis;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_06_aux)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_06_aux)
	afx_msg void OnAuxAutoAxis();
	afx_msg void OnAuxSetAxis();
	afx_msg void OnAuxAutoWash();
	virtual BOOL OnInitDialog();
	afx_msg void OnTimer(UINT nIDEvent);
	virtual void OnOK();
	afx_msg void OnAlarm6();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_06_AUX_H__BD2017E2_F36C_4057_B095_6CEA7D55EEBE__INCLUDED_)
