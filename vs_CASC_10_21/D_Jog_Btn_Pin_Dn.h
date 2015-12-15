#if !defined(AFX_D_JOG_BTN_PIN_DN_H__42802AB7_5464_4966_9C24_CD8F6F878CF3__INCLUDED_)
#define AFX_D_JOG_BTN_PIN_DN_H__42802AB7_5464_4966_9C24_CD8F6F878CF3__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// D_Jog_Btn_Pin_Dn.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CD_Jog_Btn_Pin_Dn window

class CD_Jog_Btn_Pin_Dn : public CButton
{
// Construction
public:
	CD_Jog_Btn_Pin_Dn();

// Attributes
public:

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CD_Jog_Btn_Pin_Dn)
	public:
	virtual void DrawItem(LPDRAWITEMSTRUCT lpDrawItemStruct);
	protected:
	virtual void PreSubclassWindow();
	//}}AFX_VIRTUAL

// Implementation
public:
	void SetImageList(CImageList *pImage);
	void SetImageIndex(UINT index);
	virtual ~CD_Jog_Btn_Pin_Dn();

	// Generated message map functions
protected:
	CImageList* m_pImagelist;
	int m_ImageIndex;
	BOOL IsPressed;
	//{{AFX_MSG(CD_Jog_Btn_Pin_Dn)
	afx_msg void OnLButtonDown(UINT nFlags, CPoint point);
	afx_msg void OnLButtonUp(UINT nFlags, CPoint point);
	afx_msg void OnMouseMove(UINT nFlags, CPoint point);
	//}}AFX_MSG

	DECLARE_MESSAGE_MAP()
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_D_JOG_BTN_PIN_DN_H__42802AB7_5464_4966_9C24_CD8F6F878CF3__INCLUDED_)
