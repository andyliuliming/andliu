#if !defined(AFX_BMPPROGRESSEX_H__A89BA091_1266_40D7_86DD_46FC02122302__INCLUDED_)
#define AFX_BMPPROGRESSEX_H__A89BA091_1266_40D7_86DD_46FC02122302__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// BmpProgressEx.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CBmpProgressEx window

class CBmpProgressEx : public CStatic
{
// Construction
public:
	CBmpProgressEx();

// Attributes
public:

// Operations
public:

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CBmpProgressEx)
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
	virtual ~CBmpProgressEx();

	// Generated message map functions
protected:
	//{{AFX_MSG(CBmpProgressEx)
	afx_msg void OnPaint();
	//}}AFX_MSG

	DECLARE_MESSAGE_MAP()
private:
	float m_lower;
	float m_upper;
	int m_step;
	float m_pos;
	float m_length;
	float m_length_l;
	float m_length_r;
	CRect m_rect;
	CBitmap * oldbmp;
	CBitmap bmpBack;
	CBitmap bmpFore;
	CBitmap bmpFore_l;
	CBitmap bmpFore_r;
	CDC * pDCBack;
	CDC * pDCFore;
	CDC * pDCFore_l;
	CDC * pDCFore_r;
	BITMAP bmback;
	BITMAP bmfore;//pin
	BITMAP bmfore_l;//slv_l
	BITMAP bmfore_r;//slv_r
	
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_BMPPROGRESSEX_H__A89BA091_1266_40D7_86DD_46FC02122302__INCLUDED_)
