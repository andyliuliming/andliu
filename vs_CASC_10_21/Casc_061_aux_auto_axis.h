#if !defined(AFX_CASC_061_AUX_AUTO_AXIS_H__BB0BDF6D_8847_4D82_BDD7_CFE986A8104E__INCLUDED_)
#define AFX_CASC_061_AUX_AUTO_AXIS_H__BB0BDF6D_8847_4D82_BDD7_CFE986A8104E__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_061_aux_auto_axis.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_061_aux_auto_axis dialog

class CCasc_061_aux_auto_axis : public CDialog
{
// Construction
public:
	HICON hback_pin_f;
	HICON hback_pin_s;
	HICON hback_slv_f;
	HICON hback_slv_s;
	HICON hfront_pin_f;
	HICON hfront_pin_s;
	HICON hfront_slv_f;
	HICON hfront_slv_s;
	CCasc_061_aux_auto_axis(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_061_aux_auto_axis)
	enum { IDD = IDD_CASC_AUX_AUTO_AXIS };
	CStatic	m_led_slv_s;
	CStatic	m_led_slv_f;
	CStatic	m_led_pin_s;
	CStatic	m_led_pin_f;
	float	m_align_rot;
	float	m_align_pin_pos;
	float	m_align_slv_pos;
	float	m_align_pin_spd;
	float	m_align_slv_spd;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_061_aux_auto_axis)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_061_aux_auto_axis)
	afx_msg void OnAuxAlignConfirm();
	afx_msg void OnAuxAlignStart();
	virtual void OnOK();
	virtual BOOL OnInitDialog();
	afx_msg void OnTimer(UINT nIDEvent);
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_061_AUX_AUTO_AXIS_H__BB0BDF6D_8847_4D82_BDD7_CFE986A8104E__INCLUDED_)
