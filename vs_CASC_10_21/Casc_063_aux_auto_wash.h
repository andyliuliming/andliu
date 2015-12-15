#if !defined(AFX_CASC_063_AUX_AUTO_WASH_H__498A214C_AC4D_4A93_97E8_8C3F428A0B6C__INCLUDED_)
#define AFX_CASC_063_AUX_AUTO_WASH_H__498A214C_AC4D_4A93_97E8_8C3F428A0B6C__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_063_aux_auto_wash.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_063_aux_auto_wash dialog

class CCasc_063_aux_auto_wash : public CDialog
{
// Construction
public:
	CCasc_063_aux_auto_wash(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_063_aux_auto_wash)
	enum { IDD = IDD_CASC_AUX_AUTO_WASH };
	float	m_aux_pin_dis;
	float	m_aux_slv_dis;
	float	m_aux_rot_spd_dis;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_063_aux_auto_wash)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_063_aux_auto_wash)
	afx_msg void OnAuxClear1();
	afx_msg void OnAuxClear2();
	afx_msg void OnAuxFinish();
	virtual void OnOK();
	afx_msg void OnTimer(UINT nIDEvent);
	virtual BOOL OnInitDialog();
	afx_msg void OnAlarm63();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_063_AUX_AUTO_WASH_H__498A214C_AC4D_4A93_97E8_8C3F428A0B6C__INCLUDED_)
