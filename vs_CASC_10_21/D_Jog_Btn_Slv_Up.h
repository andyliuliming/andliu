#if !defined(AFX_D_JOG_BTN_SLV_UP_H__CF99EDAD_154F_4CE3_A2CB_D2EBF18D5A7F__INCLUDED_)
#define AFX_D_JOG_BTN_SLV_UP_H__CF99EDAD_154F_4CE3_A2CB_D2EBF18D5A7F__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// D_Jog_Btn_Slv_Up.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CD_Jog_Btn_Slv_Up window

class CD_Jog_Btn_Slv_Up : public CButton
{
// Construction
public:
	CD_Jog_Btn_Slv_Up();

// Attributes
public:

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CD_Jog_Btn_Slv_Up)
	public:
	virtual void DrawItem(LPDRAWITEMSTRUCT lpDrawItemStruct);
	protected:
	virtual void PreSubclassWindow();
	//}}AFX_VIRTUAL

// Implementation
public:
	void SetImageList(CImageList *pImage);
	void SetImageIndex(UINT index);
	virtual ~CD_Jog_Btn_Slv_Up();

	// Generated message map functions
protected:
	BOOL IsPressed;//按钮是否被按下
	int m_ImageIndex;//图标索引
	CImageList* m_pImagelist;//图像列表指针
	//{{AFX_MSG(CD_Jog_Btn_Slv_Up)
	afx_msg void OnLButtonDown(UINT nFlags, CPoint point);
	afx_msg void OnLButtonUp(UINT nFlags, CPoint point);
	afx_msg void OnMouseMove(UINT nFlags, CPoint point);
	//}}AFX_MSG

	DECLARE_MESSAGE_MAP()
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_D_JOG_BTN_SLV_UP_H__CF99EDAD_154F_4CE3_A2CB_D2EBF18D5A7F__INCLUDED_)
