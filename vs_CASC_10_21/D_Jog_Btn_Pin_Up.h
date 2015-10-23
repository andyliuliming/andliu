#if !defined(AFX_D_JOG_BTN_PIN_UP_H__6FE78808_274D_41FD_B470_A438A37C676A__INCLUDED_)
#define AFX_D_JOG_BTN_PIN_UP_H__6FE78808_274D_41FD_B470_A438A37C676A__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// D_Jog_Btn_Pin_Up.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CD_Jog_Btn_Pin_Up window

class CD_Jog_Btn_Pin_Up : public CButton
{
// Construction
public:
	CD_Jog_Btn_Pin_Up();

// Attributes
public:

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CD_Jog_Btn_Pin_Up)
	public:
	virtual void DrawItem(LPDRAWITEMSTRUCT lpDrawItemStruct);
	protected:
	virtual void PreSubclassWindow();
	//}}AFX_VIRTUAL

// Implementation
public:
	void SetImageList(CImageList *pImage);
	void SetImageIndex(UINT index);
	virtual ~CD_Jog_Btn_Pin_Up();

	// Generated message map functions
protected:
	CImageList* m_pImagelist;
	int m_ImageIndex;
	BOOL IsPressed;
	//{{AFX_MSG(CD_Jog_Btn_Pin_Up)
	afx_msg void OnLButtonDown(UINT nFlags, CPoint point);
	afx_msg void OnLButtonUp(UINT nFlags, CPoint point);
	afx_msg void OnMouseMove(UINT nFlags, CPoint point);
	//}}AFX_MSG

	DECLARE_MESSAGE_MAP()
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_D_JOG_BTN_PIN_UP_H__6FE78808_274D_41FD_B470_A438A37C676A__INCLUDED_)
