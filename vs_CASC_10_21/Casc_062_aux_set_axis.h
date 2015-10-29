#if !defined(AFX_CASC_062_AUX_SET_AXIS_H__4D3173D0_8200_43CD_9AC1_6426B55C1753__INCLUDED_)
#define AFX_CASC_062_AUX_SET_AXIS_H__4D3173D0_8200_43CD_9AC1_6426B55C1753__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_062_aux_set_axis.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_062_aux_set_axis dialog

class CCasc_062_aux_set_axis : public CDialog
{
// Construction
public:
	HICON hback_home_slv;
	HICON hfront_home_slv;
	HICON hback_home_pin;
	HICON hfront_home_pin;
	HICON hback_home;
	HICON hfront_home;
	HICON hback_gas;
	HICON hfront_gas;
	CCasc_062_aux_set_axis(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_062_aux_set_axis)
	enum { IDD = IDD_CASC_AUX_SET_AXIS };
	CStatic	m_led_home_slv;
	CStatic	m_led_home_pin;
	CStatic	m_led_home;
	CStatic	m_led_gas_brk;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_062_aux_set_axis)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_062_aux_set_axis)
	afx_msg void OnAuxHomeGas();
	afx_msg void OnAuxHomePin();
	afx_msg void OnAuxHomeSlv();
	afx_msg void OnAuxHomeStart();
	virtual void OnOK();
	virtual BOOL OnInitDialog();
	afx_msg void OnTimer(UINT nIDEvent);
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_062_AUX_SET_AXIS_H__4D3173D0_8200_43CD_9AC1_6426B55C1753__INCLUDED_)
