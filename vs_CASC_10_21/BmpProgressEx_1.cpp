// BmpProgressEx_1.cpp : implementation file
//

#include "stdafx.h"
#include "casc_05.h"
#include "BmpProgressEx_1.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif
extern float global_pin_limit_dn;//pin下限位
extern float global_pin_limit_up;//pin上限位
extern float global_slv_limit_dn;//slv下限位
extern float global_slv_limit_up;//slv上限位
extern float global_slv_pos_disp;//slv实时位置显示
extern float global_pin_pos_disp;//pin实时位置显示
/////////////////////////////////////////////////////////////////////////////
// CBmpProgressEx_1

CBmpProgressEx_1::CBmpProgressEx_1()
{
	m_lower = global_slv_limit_up;//1;
	m_upper = global_slv_limit_dn;//100;
	m_step = 1;
	m_pos = global_slv_pos_disp;//0;
	pDCBack = new CDC;
	pDCFore = new CDC;
	bmpBack.LoadBitmap(IDB_SLV_BACK);
	bmpFore.LoadBitmap(IDB_SLV);
}

CBmpProgressEx_1::~CBmpProgressEx_1()
{
	delete pDCBack;
	delete pDCFore;
}


BEGIN_MESSAGE_MAP(CBmpProgressEx_1, CStatic)
	//{{AFX_MSG_MAP(CBmpProgressEx_1)
	ON_WM_PAINT()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CBmpProgressEx_1 message handlers

float CBmpProgressEx_1::GetPos()
{
	return global_slv_pos_disp;
}

void CBmpProgressEx_1::GetRange(float &lower, float &upper)
{
	lower = m_lower;
	upper = m_upper;
}

int CBmpProgressEx_1::OffsetPos(float nPos)
{
	CRect tempRect = m_rect;
	//tempRect.left = (LONG)(m_length * m_rect.Width());
	//tempRect.left = (LONG)(m_length * m_rect.Height());
	tempRect.left=0;
	//m_pos += nPos;
	m_pos=global_slv_pos_disp;
	if(m_pos>m_upper)
	{
		m_pos = m_upper;
		InvalidateRect(&tempRect);
		return 0;
	}
	InvalidateRect(&tempRect);
	return 1;
}

int CBmpProgressEx_1::SetPos(float nPos)
{
	if(m_lower <= nPos && m_upper >= nPos)
	{
		m_pos = nPos;
		return 1;
	}
	return 0;
}

void CBmpProgressEx_1::SetRange(float nLower, float nUpper)
{
	if(nUpper > nLower)
	{
		m_lower = nLower;
		m_upper = nUpper;
	}
	else
	{
		m_lower = nUpper;
		m_upper = nLower;
	}
}

int CBmpProgressEx_1::SetStep(int nStep)
{
	if(nStep>0)
	{
		m_step = nStep;
		return 1;
	}
	return 0;
}

int CBmpProgressEx_1::StepIt()
{
	CRect tempRect = m_rect;
	//tempRect.left = (LONG)(m_length * m_rect.Width());
	//tempRect.left = (LONG)(m_length * m_rect.Height());
	tempRect.left=0;
	m_pos = global_slv_pos_disp;
	if(m_pos>global_slv_limit_dn)
	{
		m_pos = global_slv_limit_dn;
		InvalidateRect(&tempRect);
		return 0;
	}
		InvalidateRect(&tempRect);
	return 1;
}

void CBmpProgressEx_1::OnPaint() 
{
	CPaintDC dc(this); // device context for painting
	
	// TODO: Add your message handler code here
	m_length = (global_slv_pos_disp-global_slv_limit_up)/(global_slv_limit_dn-global_slv_limit_up);

	GetClientRect(&m_rect);
	pDCBack->CreateCompatibleDC(&dc);
	pDCFore->CreateCompatibleDC(&dc);

	bmpBack.GetBitmap(&bmback);
	bmpFore.GetBitmap(&bmfore);
	pDCBack->SelectObject(bmpBack);

	dc.StretchBlt(0,0,m_rect.Width(),m_rect.Height(),pDCBack,0,0,bmback.bmWidth,bmback.bmHeight,SRCCOPY);

	(CBitmap*)pDCFore->SelectObject(bmpFore);
	//dc.StretchBlt(0, 0, (int)(m_rect.Width() * m_length), m_rect.Height(),
		//pDCFore, 0, 0, (int)(bmfore.bmWidth * m_length), bmfore.bmHeight, SRCCOPY);
	
	//dc.StretchBlt(0,0,m_rect.Width(),(int)(m_rect.Height()* m_length),
	//	pDCFore,0,0,bmfore.bmWidth,(int)(bmfore.bmHeight * m_length),
	//	SRCCOPY);

	dc.StretchBlt(0,0,m_rect.Width(),(int)(m_rect.Height()* m_length),
		pDCFore,0,0,bmfore.bmWidth,(int)(bmfore.bmHeight * m_length),
		SRCCOPY);
	pDCBack->DeleteDC();
	pDCFore->DeleteDC();
	// Do not call CStatic::OnPaint() for painting messages
}
