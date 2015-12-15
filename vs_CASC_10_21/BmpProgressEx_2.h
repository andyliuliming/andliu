#if !defined(AFX_BMPPROGRESSEX_2_H__01A33A7C_3BA1_4038_8BD8_571E11601CD9__INCLUDED_)
#define AFX_BMPPROGRESSEX_2_H__01A33A7C_3BA1_4038_8BD8_571E11601CD9__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// BmpProgressEx_2.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CBmpProgressEx_2 window

class CBmpProgressEx_2 : public CStatic
{
// Construction
public:
	CBmpProgressEx_2();

// Attributes
public:

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CBmpProgressEx_2)
	//}}AFX_VIRTUAL

// Implementation
public:
	float m_length;
	void StepIt();
	CRect m_rect;
	virtual ~CBmpProgressEx_2();

	// Generated message map functions
protected:
	//{{AFX_MSG(CBmpProgressEx_2)
	afx_msg void OnPaint();
	//}}AFX_MSG

	DECLARE_MESSAGE_MAP()
private:
	BITMAP bm;
	CBitmap bmp;
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_BMPPROGRESSEX_2_H__01A33A7C_3BA1_4038_8BD8_571E11601CD9__INCLUDED_)
