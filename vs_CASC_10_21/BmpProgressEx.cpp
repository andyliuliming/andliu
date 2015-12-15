// BmpProgressEx.cpp : implementation file
//

#include "stdafx.h"
#include "casc_05.h"
#include "BmpProgressEx.h"

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
extern float global_slv_cur_pos;
extern float global_pin_cur_pos;
extern float global_slv_lst_pos;
extern float global_pin_lst_pos;
extern int   global_paint;
/////////////////////////////////////////////////////////////////////////////
// CBmpProgressEx

CBmpProgressEx::CBmpProgressEx()
{
	m_lower = global_pin_limit_up;//1;
	m_upper = global_pin_limit_dn;//100;
	m_step = 1;
	m_pos = global_pin_pos_disp;//0;
	global_pin_cur_pos=global_pin_pos_disp;
	global_slv_cur_pos=global_slv_pos_disp;
	pDCBack = new CDC;
	pDCFore = new CDC;
	pDCFore_l = new CDC;
	pDCFore_r = new CDC;
	bmpBack.LoadBitmap(IDB_PIN_BACK);//背景
	bmpFore.LoadBitmap(IDB_PIN);//pin IDB_SLV
	bmpFore_l.LoadBitmap(IDB_SLV_L);
	bmpFore_r.LoadBitmap(IDB_SLV_R);
	global_paint=1;
}

CBmpProgressEx::~CBmpProgressEx()
{
	delete pDCBack;
	delete pDCFore;
	delete pDCFore_l;
	delete pDCFore_r;
}


BEGIN_MESSAGE_MAP(CBmpProgressEx, CStatic)
	//{{AFX_MSG_MAP(CBmpProgressEx)
	ON_WM_PAINT()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CBmpProgressEx message handlers

void CBmpProgressEx::OnPaint() 
{
	CPaintDC dc(this); // device context for painting
	
	// TODO: Add your message handler code here
	//m_length = (float)m_pos/(m_upper-m_lower);
	//m_length = (global_pin_pos_disp-global_pin_limit_up)/(global_pin_limit_dn-global_pin_limit_up);
	//m_length_l = (global_slv_pos_disp-global_slv_limit_up)/(global_slv_limit_dn-global_slv_limit_up);
	//m_length_r = (global_slv_pos_disp-global_slv_limit_up)/(global_slv_limit_dn-global_slv_limit_up);

	m_length = (global_pin_pos_disp-global_pin_limit_up)/(global_slv_limit_dn-global_pin_limit_up);
	m_length_l = (global_slv_pos_disp-global_pin_limit_up)/(global_slv_limit_dn-global_pin_limit_up);
	m_length_r = (global_slv_pos_disp-global_pin_limit_up)/(global_slv_limit_dn-global_pin_limit_up);

	GetClientRect(&m_rect);
	pDCBack->CreateCompatibleDC(&dc);
	pDCFore->CreateCompatibleDC(&dc);
	pDCFore_l->CreateCompatibleDC(&dc);
	pDCFore_r->CreateCompatibleDC(&dc);

	bmpBack.GetBitmap(&bmback);
	bmpFore.GetBitmap(&bmfore);
	bmpFore_l.GetBitmap(&bmfore_l);
	bmpFore_r.GetBitmap(&bmfore_r);

	pDCBack->SelectObject(bmpBack);
	//背景设置
	dc.StretchBlt(0,0,m_rect.Width(),m_rect.Height(),pDCBack,0,0,bmback.bmWidth,bmback.bmHeight,SRCCOPY);

	
	//dc.StretchBlt(0, 0, (int)(m_rect.Width() * m_length), m_rect.Height(),
		//pDCFore, 0, 0, (int)(bmfore.bmWidth * m_length), bmfore.bmHeight, SRCCOPY);
	
	//dc.StretchBlt(0,0,m_rect.Width(),(int)(m_rect.Height()* m_length),
	//	pDCFore,0,0,bmfore.bmWidth,(int)(bmfore.bmHeight * m_length),
	//	SRCCOPY);
	//前景设置slv_l
	(CBitmap*)pDCFore_l->SelectObject(bmpFore_l);
	dc.StretchBlt(0,0,m_rect.Width()/3,(int)(m_rect.Height()* m_length_l),
		pDCFore_l,0,0,bmfore_l.bmWidth/3,(int)(bmfore_l.bmHeight * m_length_l),
		SRCCOPY);
	
	//前景设置pin
	(CBitmap*)pDCFore->SelectObject(bmpFore);
	dc.StretchBlt(m_rect.Width()/3,0,m_rect.Width()/3,(int)(m_rect.Height()* m_length),
		pDCFore,m_rect.Width()/3,0,bmfore.bmWidth/3,(int)(bmfore.bmHeight * m_length),
		SRCCOPY);

	//前景设置slv_r
	(CBitmap*)pDCFore_r->SelectObject(bmpFore_r);
	dc.StretchBlt(m_rect.Width()*2/3-4,0,m_rect.Width()/3+4,(int)(m_rect.Height()* m_length_r),
		pDCFore_r,m_rect.Width()/3,0,bmfore_r.bmWidth/3-4,(int)(bmfore_r.bmHeight * m_length_r),
		SRCCOPY);

	pDCBack->DeleteDC();
	pDCFore_l->DeleteDC();
	pDCFore->DeleteDC();
	pDCFore_r->DeleteDC();

	// Do not call CStatic::OnPaint() for painting messages
}

float CBmpProgressEx::GetPos()
{
	//return m_pos;
	return global_pin_pos_disp;
}

void CBmpProgressEx::GetRange(float &lower, float &upper)
{
	lower = m_lower;
	upper = m_upper;
}

int CBmpProgressEx::OffsetPos(float nPos)
{
	CRect tempRect = m_rect;
	//tempRect.left = (LONG)(m_length * m_rect.Width());
	//tempRect.left = (LONG)(m_length * m_rect.Height());
	tempRect.left=0;
	//m_pos += nPos;
	m_pos=global_pin_pos_disp;
	if(m_pos>m_upper)
	{
		m_pos = m_upper;
		InvalidateRect(&tempRect);
		return 0;
	}
	InvalidateRect(&tempRect);
	return 1;
}

int CBmpProgressEx::SetPos(float nPos)
{
	if(m_lower <= nPos && m_upper >= nPos)
	{
		m_pos = nPos;
		return 1;
	}
	return 0;
}

void CBmpProgressEx::SetRange(float nLower, float nUpper)
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

int CBmpProgressEx::SetStep(int nStep)
{
	if(nStep>0)
	{
		m_step = nStep;
		return 1;
	}
	return 0;
}

int CBmpProgressEx::StepIt()
{
	CRect tempRect = m_rect;
	//global_paint=1;

	//tempRect.left = (LONG)(m_length * m_rect.Width());
	//tempRect.left = (LONG)(m_length * m_rect.Height());
	tempRect.left=0;
	m_pos = global_pin_pos_disp;
	global_pin_cur_pos=global_pin_pos_disp;
	global_slv_cur_pos=global_slv_pos_disp;
	
	//else{
		
	//}
	if(m_pos>global_pin_limit_dn)
	{
		m_pos = global_pin_limit_dn;
		InvalidateRect(&tempRect);
		return 0;
	}
	//if(global_paint==1&&(global_slv_lst_pos==global_slv_cur_pos))
	//{
	//	InvalidateRect(&tempRect);
	//	global_paint=2;
	//	return 1;
	//}
	if(global_slv_lst_pos!=global_slv_cur_pos)
	{
		InvalidateRect(&tempRect);
		global_slv_lst_pos=global_slv_cur_pos;
		return 1;
	}
	if(global_pin_lst_pos!=global_pin_cur_pos)
	{
		InvalidateRect(&tempRect);
		global_pin_lst_pos=global_pin_cur_pos;
		return 1;
	}
	if((global_pin_lst_pos==0)&&(global_pin_cur_pos==0)&&(global_paint==1))
	{
		global_paint=0;
		InvalidateRect(&tempRect);
		return 1;
	}
	if((global_slv_lst_pos==0)&&(global_slv_cur_pos==0)&&(global_paint==1))
	{
		global_paint=0;
		InvalidateRect(&tempRect);
		return 1;
	}
	//return 1;
}
