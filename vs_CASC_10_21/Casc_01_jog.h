#if !defined(AFX_CASC_01_JOG_H__E8FD5D08_A260_4BE7_9CDB_A9F87984CF54__INCLUDED_)
#define AFX_CASC_01_JOG_H__E8FD5D08_A260_4BE7_9CDB_A9F87984CF54__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_01_jog.h : header file
//
#include "BmpProgressEx.h"
#include "BmpProgressEx_1.h"
#include "D_Jog_Btn_Slv_Up.h"
#include "D_Jog_Btn_Slv_Dn.h"
#include "D_Jog_Btn_Pin_Up.h"
#include "D_Jog_Btn_Pin_Dn.h"
#include "BmpProgressEx_2.h"
extern int global_jog_rot_status;
extern int global_jog_rot_status_2;
/////////////////////////////////////////////////////////////////////////////
// CCasc_01_jog dialog

class CCasc_01_jog : public CDialog
{
// Construction
public:
	CCasc_01_jog(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_01_jog)
	enum { IDD = IDD_CASC_JOG };
	CBmpProgressEx	m_01_jog_slv_pin;
	CD_Jog_Btn_Pin_Up	m_jog_pin_up1;
	CD_Jog_Btn_Pin_Dn	m_jog_pin_dn1;
	CD_Jog_Btn_Slv_Dn	m_jog_slv_dn1;
	CD_Jog_Btn_Slv_Up	m_jog_slv_up1;
	float	m_jog_pin_dis;
	float	m_jog_slv_dis;
	float	m_rot_spd_dis;
	float	m_pin_limit_dn;
	float	m_pin_limit_up;
	float	m_jog_slv_limit_dn;
	float	m_jog_slv_limit_up;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_01_jog)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	virtual BOOL OnCommand(WPARAM wParam, LPARAM lParam);
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CCasc_01_jog)
	afx_msg void OnJogMonitor();
	afx_msg void OnChangeJogLimitUp();
	afx_msg void OnTimer(UINT nIDEvent);
	afx_msg void OnTest();
	afx_msg void OnSetfocusEidcRotSpdSet();
	afx_msg void OnSetfocusEidcSlvPosObj();
	afx_msg void OnSetfocusEidcPinPosObj();
	afx_msg void OnSetfocusEditUpDnSpd();
	afx_msg void OnJogRotStart();
	afx_msg void OnPaint();
	virtual BOOL OnInitDialog();
	virtual void OnOK();
	afx_msg void OnRotLink();
	afx_msg void OnSlvLink();
	afx_msg void OnAlarm2();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
private:
	CImageList m_images_slv_up;//用于存储图标
	CImageList m_images_slv_dn;//用于存储图标
	CImageList m_images_pin_up;//用于存储图标
	CImageList m_images_pin_dn;//用于存储图标
public:
	afx_msg void OnBnClickedJogRotStart2();
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_01_JOG_H__E8FD5D08_A260_4BE7_9CDB_A9F87984CF54__INCLUDED_)
