#if !defined(AFX_CASC_011_JOG_H__C9E87DC9_727E_4C34_8876_F01BD3180863__INCLUDED_)
#define AFX_CASC_011_JOG_H__C9E87DC9_727E_4C34_8876_F01BD3180863__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_011_jog.h : header file
//
#include "BmpProgressEx.h"
extern int global_opr_wr_rd;//–¥»Î”Î∂¡»°◊¥Ã¨
extern int global_jog_brk_status;
extern int global_jog_col_status;
extern int global_jog_gas_status;
/////////////////////////////////////////////////////////////////////////////
// CCasc_011_jog dialog

class CCasc_011_jog : public CDialog
{
// Construction
public:
	HICON hback_8;
	HICON hfront_8;
	HICON hback_7;
	HICON hfront_7;
	HICON hback_6;
	HICON hfront_6;
	HICON hback_5;
	HICON hfront_5;
	HICON hback_4;
	HICON hfront_4;
	HICON hback_3;
	HICON hfront_3;
	HICON hback_2;
	HICON hfront_2;
	HICON hback_1;
	HICON hfront_1;
	CCasc_011_jog(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_011_jog)
	enum { IDD = IDD_CASC_JOG_MONITOR };
	CBmpProgressEx	m_011_jog_slv_pin;
	CStatic	m_jog_moni_8;
	CStatic	m_jog_moni_7;
	CStatic	m_jog_moni_6;
	CStatic	m_jog_moni_5;
	CStatic	m_jog_moni_4;
	CStatic	m_jog_moni_3;
	CStatic	m_jog_moni_2;
	CStatic	m_jog_moni_1;
	float	m_pin_dis;
	float	m_slv_dis;
	float	m_pin_axis_set;
	float	m_slv_axis_set;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_011_jog)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_011_jog)
	afx_msg void OnButtonJogBrkOpen();
	afx_msg void OnButtonJogColOpen();
	afx_msg void OnButtonJogGasOpen();
	afx_msg void OnButtonCntClr();
	afx_msg void OnAxisActive();
	virtual void OnOK();
	virtual BOOL OnInitDialog();
	afx_msg void OnTimer(UINT nIDEvent);
	afx_msg void OnAlarm3();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_011_JOG_H__C9E87DC9_727E_4C34_8876_F01BD3180863__INCLUDED_)
