#if !defined(AFX_BMPPROGRESSEX_1_H__CCEA3894_0C9B_4747_BBCE_28F8B3035BE7__INCLUDED_)
#define AFX_BMPPROGRESSEX_1_H__CCEA3894_0C9B_4747_BBCE_28F8B3035BE7__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// BmpProgressEx_1.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CBmpProgressEx_1 window

class CBmpProgressEx_1 : public CStatic
{
// Construction
public:
	CBmpProgressEx_1();

// Attributes
public:

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CBmpProgressEx_1)
	//}}AFX_VIRTUAL

// Implementation
public:
	int StepIt();
	int SetStep(int nStep);
	void SetRange(float nLower, float nUpper);
	int SetPos(float nPos);
	int OffsetPos(float nPos);
	void GetRange(float &lower, float &upper);
	float GetPos();
	virtual ~CBmpProgressEx_1();

	// Generated message map functions
protected:
	//{{AFX_MSG(CBmpProgressEx_1)
	afx_msg void OnPaint();
	//}}AFX_MSG

	DECLARE_MESSAGE_MAP()
private:
	float m_lower;
	float m_upper;
	int m_step;
	float m_pos;
	float m_length;
	CRect m_rect;
	CBitmap * oldbmp;
	CBitmap bmpBack;
	CBitmap bmpFore;
	CDC * pDCBack;
	CDC * pDCFore;
	BITMAP bmback;
	BITMAP bmfore;
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_BMPPROGRESSEX_1_H__CCEA3894_0C9B_4747_BBCE_28F8B3035BE7__INCLUDED_)
