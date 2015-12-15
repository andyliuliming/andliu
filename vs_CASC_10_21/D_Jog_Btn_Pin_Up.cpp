// D_Jog_Btn_Pin_Up.cpp : implementation file
//

#include "stdafx.h"
#include "casc_05.h"
#include "D_Jog_Btn_Pin_Up.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

extern int   global_pin_up_status;//pin上按钮状态
extern int   global_opr_wr_rd;
extern DWORD m_dwThreadId_Wr;
/////////////////////////////////////////////////////////////////////////////
// CD_Jog_Btn_Pin_Up

CD_Jog_Btn_Pin_Up::CD_Jog_Btn_Pin_Up()
{
	IsPressed = FALSE;
}

CD_Jog_Btn_Pin_Up::~CD_Jog_Btn_Pin_Up()
{
}


BEGIN_MESSAGE_MAP(CD_Jog_Btn_Pin_Up, CButton)
	//{{AFX_MSG_MAP(CD_Jog_Btn_Pin_Up)
	ON_WM_LBUTTONDOWN()
	ON_WM_LBUTTONUP()
	ON_WM_MOUSEMOVE()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CD_Jog_Btn_Pin_Up message handlers

void CD_Jog_Btn_Pin_Up::DrawItem(LPDRAWITEMSTRUCT lpDrawItemStruct) 
{
	// TODO: Add your code to draw the specified item
	CDC dc ;
	dc.Attach(lpDrawItemStruct->hDC);	
	if (m_pImagelist)
	{
		UINT state = lpDrawItemStruct->itemState; //获取状态
		UINT action = lpDrawItemStruct->itemAction;
		//获取图像列中图像大小
		IMAGEINFO imageinfo;
		m_pImagelist->GetImageInfo(m_ImageIndex,&imageinfo);
		CSize imagesize;
		imagesize.cx = imageinfo.rcImage.right-imageinfo.rcImage.left;
		imagesize.cy = imageinfo.rcImage.bottom - imageinfo.rcImage.top;
		//在按钮垂直方向居中显示位图
		CRect rect;
		GetClientRect(rect);
		CPoint point;
		point.x = (rect.Width() - imagesize.cx)/2;//5;
		point.y = (rect.Height() - imagesize.cy)/2;
		m_pImagelist->Draw(&dc,m_ImageIndex,point,ILD_NORMAL|ILD_TRANSPARENT);
		//按钮被选中或者获得焦点时
		if ((state&ODS_SELECTED)||(state&ODS_FOCUS))
		{		
			CRect focusRect (rect); //焦点矩形
			focusRect.DeflateRect(4,4,4,4);
			CPen pen(PS_DASHDOTDOT,1,RGB(0,0,0));
			CBrush brush;
			brush.CreateStockObject(NULL_BRUSH);
			dc.SelectObject(&brush);
			dc.SelectObject(&pen);
			//绘制焦点矩形
			dc.DrawFocusRect(focusRect);
			//绘制立体效果
			dc.DrawEdge(rect,BDR_RAISEDINNER|BDR_RAISEDOUTER,BF_BOTTOMLEFT|BF_TOPRIGHT);			
			//获得焦点时绘制黑色边框
			dc.Draw3dRect(rect,RGB(51,51,51),RGB(0,0,0));
		}
		else  //默认情况下
		{	
			CRect focusRect (rect);
			focusRect.DeflateRect(4,4,4,4);		
			CPen pen(PS_DOT,1,RGB(192,192,192));
			CBrush brush;
			brush.CreateStockObject(NULL_BRUSH);
			dc.SelectObject(&brush);
			dc.SelectObject(&pen);
			dc.Rectangle(focusRect);			
			dc.DrawEdge(rect,BDR_RAISEDINNER|BDR_RAISEDOUTER,BF_BOTTOMLEFT|BF_TOPRIGHT);	
		}
		if (IsPressed) //在按钮被按下时绘制按下效果
		{

			CRect focusRect1(rect);
			focusRect1.DeflateRect(4,4,4,4);
			dc.DrawFocusRect(focusRect1);			
			dc.DrawEdge(rect,BDR_SUNKENINNER |BDR_SUNKENOUTER ,BF_BOTTOMLEFT|BF_TOPRIGHT);

			dc.Draw3dRect(rect,RGB(51,51,51),RGB(0,0,0));	
			//dc.DrawFocusRect(focusRect1);
		}
		//绘制按钮文本
		CString text;
		GetWindowText(text);
		rect.DeflateRect(point.x+imagesize.cx+2,0,0,0);
		dc.SetBkMode(TRANSPARENT);
		dc.DrawText(text,rect,DT_LEFT|DT_SINGLELINE|DT_VCENTER);
	}
}

void CD_Jog_Btn_Pin_Up::OnLButtonDown(UINT nFlags, CPoint point) 
{
	// TODO: Add your message handler code here and/or call default
	IsPressed = TRUE; //按钮被按下
	global_pin_up_status=1;
	global_opr_wr_rd=JOG_PIN_UP;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_BTN_PIN_UP, NULL, NULL);
	CButton::OnLButtonDown(nFlags, point);
}

void CD_Jog_Btn_Pin_Up::OnLButtonUp(UINT nFlags, CPoint point) 
{
	// TODO: Add your message handler code here and/or call default
	IsPressed = FALSE;	//释放鼠标按钮
	global_pin_up_status=0;
	global_opr_wr_rd=JOG_PIN_UP;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_BTN_PIN_UP_STOP, NULL, NULL);
	CButton::OnLButtonUp(nFlags, point);
}

void CD_Jog_Btn_Pin_Up::OnMouseMove(UINT nFlags, CPoint point) 
{
	// TODO: Add your message handler code here and/or call default
	CRect rect;
	GetClientRect(rect);

	if (!rect.PtInRect(point)) //判断当前鼠标点是否在按钮区域内
	{
		if (IsPressed) //如果鼠标不在按钮的区域内,并且按钮处于按下状态,将按钮设置为正常状态
			IsPressed = FALSE;
	}
	CButton::OnMouseMove(nFlags, point);
}

void CD_Jog_Btn_Pin_Up::PreSubclassWindow() 
{
	// TODO: Add your specialized code here and/or call the base class
	
	CButton::PreSubclassWindow();
	ModifyStyle(0,BS_OWNERDRAW);
}

void CD_Jog_Btn_Pin_Up::SetImageIndex(UINT index)
{
	m_ImageIndex = index;
}

void CD_Jog_Btn_Pin_Up::SetImageList(CImageList *pImage)
{
	m_pImagelist = pImage;
}
