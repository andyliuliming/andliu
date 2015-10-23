// BmpProgressEx_2.cpp : implementation file
//

#include "stdafx.h"
#include "casc_05.h"
#include "BmpProgressEx_2.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

extern float global_slv_pos_disp;//slv实时位置显示
extern float global_pin_pos_disp;//pin实时位置显示
extern float global_pin_limit_dn;//pin下限位
extern float global_pin_limit_up;//pin上限位
extern float global_slv_limit_dn;//slv下限位
extern float global_slv_limit_up;//slv上限位
/////////////////////////////////////////////////////////////////////////////
// CBmpProgressEx_2

CBmpProgressEx_2::CBmpProgressEx_2()
{
	//SetTimer(1,100,NULL);
	bmp.LoadBitmap(IDB_SLV_PIN);
}

CBmpProgressEx_2::~CBmpProgressEx_2()
{
}


BEGIN_MESSAGE_MAP(CBmpProgressEx_2, CStatic)
	//{{AFX_MSG_MAP(CBmpProgressEx_2)
	ON_WM_PAINT()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CBmpProgressEx_2 message handlers

void CBmpProgressEx_2::OnPaint() 
{
	CPaintDC dc(this); // device context for painting
	
	// TODO: Add your message handler code here

	GetClientRect(&m_rect);
	//CPaintDC dc(this);
	Graphics graphics(dc.GetSafeHdc());
	int nBottom_slv_left;
	int nBottom_pin=0;
	int nBottom_slv_right=0;
	m_length = (global_pin_pos_disp-global_pin_limit_up)/(global_pin_limit_dn-global_pin_limit_up);
	nBottom_slv_left = m_rect.top + (int)(m_rect.Height()*m_length) - 1;
	
	bmp.GetBitmap(&bm);

	LinearGradientBrush lgb1(Point(0, 0), Point(54, nBottom_slv_left), Color(255, 255, 0, 0), Color(255, 255,0, 0));
	graphics.FillRectangle(&lgb1, 0, 0, 54, nBottom_slv_left);
			
	//nBottom += (rect.Height()/2 - 1);
			 
	LinearGradientBrush lgb2(Point(55, 0), Point(113, nBottom_slv_left), Color(255, 0, 255, 0), Color(255, 0, 255, 0));
	graphics.FillRectangle(&lgb2, 55, 0, 58, nBottom_slv_left);

	LinearGradientBrush lgb3(Point(114, 0), Point(166, nBottom_slv_left), Color(255, 255, 0, 0), Color(255, 255,0, 0));
	graphics.FillRectangle(&lgb3, 114, 0, 54, nBottom_slv_left);
	

	//pDCBack->CreateCompatibleDC(&dc);
	//pDCFore->CreateCompatibleDC(&dc);

	//bmpBack.GetBitmap(&bmback);
	//bmpFore.GetBitmap(&bmfore);
	//pDCBack->SelectObject(bmpBack);

	//dc.StretchBlt(0,0,m_rect.Width(),m_rect.Height(),pDCBack,0,0,bmback.bmWidth,bmback.bmHeight,SRCCOPY);

	//(CBitmap*)pDCFore->SelectObject(bmpFore);

	//dc.StretchBlt(0,0,m_rect.Width(),(int)(m_rect.Height()* m_length),
		//pDCFore,0,0,bmfore.bmWidth,(int)(bmfore.bmHeight * m_length),
		//SRCCOPY);
	//pDCBack->DeleteDC();
	//pDCFore->DeleteDC();
	// Do not call CStatic::OnPaint() for painting messages
}

//DEL void CBmpProgressEx_2::OnTimer(UINT nIDEvent) 
//DEL {
//DEL 	// TODO: Add your message handler code here and/or call default
//DEL 	
//DEL 	CStatic::OnTimer(nIDEvent);
//DEL }

void CBmpProgressEx_2::StepIt()
{
	CRect tempRect = m_rect;
	InvalidateRect(&tempRect);
}
