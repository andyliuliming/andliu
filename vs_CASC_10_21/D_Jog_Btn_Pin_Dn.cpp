// D_Jog_Btn_Pin_Dn.cpp : implementation file
//

#include "stdafx.h"
#include "casc_05.h"
#include "D_Jog_Btn_Pin_Dn.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

extern int   global_pin_dn_status;//slv�°�ť״̬
extern int   global_opr_wr_rd;
extern DWORD m_dwThreadId_Wr;
/////////////////////////////////////////////////////////////////////////////
// CD_Jog_Btn_Pin_Dn

CD_Jog_Btn_Pin_Dn::CD_Jog_Btn_Pin_Dn()
{
	IsPressed = FALSE;
}

CD_Jog_Btn_Pin_Dn::~CD_Jog_Btn_Pin_Dn()
{
}


BEGIN_MESSAGE_MAP(CD_Jog_Btn_Pin_Dn, CButton)
	//{{AFX_MSG_MAP(CD_Jog_Btn_Pin_Dn)
	ON_WM_LBUTTONDOWN()
	ON_WM_LBUTTONUP()
	ON_WM_MOUSEMOVE()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CD_Jog_Btn_Pin_Dn message handlers

void CD_Jog_Btn_Pin_Dn::DrawItem(LPDRAWITEMSTRUCT lpDrawItemStruct) 
{
	// TODO: Add your code to draw the specified item
	CDC dc ;
	dc.Attach(lpDrawItemStruct->hDC);	
	if (m_pImagelist)
	{
		UINT state = lpDrawItemStruct->itemState; //��ȡ״̬
		UINT action = lpDrawItemStruct->itemAction;
		//��ȡͼ������ͼ���С
		IMAGEINFO imageinfo;
		m_pImagelist->GetImageInfo(m_ImageIndex,&imageinfo);
		CSize imagesize;
		imagesize.cx = imageinfo.rcImage.right-imageinfo.rcImage.left;
		imagesize.cy = imageinfo.rcImage.bottom - imageinfo.rcImage.top;
		//�ڰ�ť��ֱ���������ʾλͼ
		CRect rect;
		GetClientRect(rect);
		CPoint point;
		point.x = (rect.Width() - imagesize.cx)/2;//5;
		point.y = (rect.Height() - imagesize.cy)/2;
		m_pImagelist->Draw(&dc,m_ImageIndex,point,ILD_NORMAL|ILD_TRANSPARENT);
		//��ť��ѡ�л��߻�ý���ʱ
		if ((state&ODS_SELECTED)||(state&ODS_FOCUS))
		{		
			CRect focusRect (rect); //�������
			focusRect.DeflateRect(4,4,4,4);
			CPen pen(PS_DASHDOTDOT,1,RGB(0,0,0));
			CBrush brush;
			brush.CreateStockObject(NULL_BRUSH);
			dc.SelectObject(&brush);
			dc.SelectObject(&pen);
			//���ƽ������
			dc.DrawFocusRect(focusRect);
			//��������Ч��
			dc.DrawEdge(rect,BDR_RAISEDINNER|BDR_RAISEDOUTER,BF_BOTTOMLEFT|BF_TOPRIGHT);			
			//��ý���ʱ���ƺ�ɫ�߿�
			dc.Draw3dRect(rect,RGB(51,51,51),RGB(0,0,0));
		}
		else  //Ĭ�������
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
		if (IsPressed) //�ڰ�ť������ʱ���ư���Ч��
		{

			CRect focusRect1(rect);
			focusRect1.DeflateRect(4,4,4,4);
			dc.DrawFocusRect(focusRect1);			
			dc.DrawEdge(rect,BDR_SUNKENINNER |BDR_SUNKENOUTER ,BF_BOTTOMLEFT|BF_TOPRIGHT);

			dc.Draw3dRect(rect,RGB(51,51,51),RGB(0,0,0));	
			//dc.DrawFocusRect(focusRect1);
		}
		//���ư�ť�ı�
		CString text;
		GetWindowText(text);
		rect.DeflateRect(point.x+imagesize.cx+2,0,0,0);
		dc.SetBkMode(TRANSPARENT);
		dc.DrawText(text,rect,DT_LEFT|DT_SINGLELINE|DT_VCENTER);
	}
}

void CD_Jog_Btn_Pin_Dn::OnLButtonDown(UINT nFlags, CPoint point) 
{
	// TODO: Add your message handler code here and/or call default
	IsPressed = TRUE; //��ť������
	global_pin_dn_status=1;
	global_opr_wr_rd=JOG_PIN_DN;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_BTN_PIN_DN, NULL, NULL);
	CButton::OnLButtonDown(nFlags, point);
}

void CD_Jog_Btn_Pin_Dn::OnLButtonUp(UINT nFlags, CPoint point) 
{
	// TODO: Add your message handler code here and/or call default
	IsPressed = FALSE;	//�ͷ���갴ť
	global_pin_dn_status=0;
	global_opr_wr_rd=JOG_PIN_DN;
	PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_BTN_PIN_DN_STOP, NULL, NULL);
	CButton::OnLButtonUp(nFlags, point);
}

void CD_Jog_Btn_Pin_Dn::OnMouseMove(UINT nFlags, CPoint point) 
{
	// TODO: Add your message handler code here and/or call default
	CRect rect;
	GetClientRect(rect);

	if (!rect.PtInRect(point)) //�жϵ�ǰ�����Ƿ��ڰ�ť������
	{
		if (IsPressed) //�����겻�ڰ�ť��������,���Ұ�ť���ڰ���״̬,����ť����Ϊ����״̬
			IsPressed = FALSE;
	}
	CButton::OnMouseMove(nFlags, point);
}

void CD_Jog_Btn_Pin_Dn::PreSubclassWindow() 
{
	// TODO: Add your specialized code here and/or call the base class
	CButton::PreSubclassWindow();
	ModifyStyle(0,BS_OWNERDRAW);
}

void CD_Jog_Btn_Pin_Dn::SetImageIndex(UINT index)
{
	m_ImageIndex = index;
}

void CD_Jog_Btn_Pin_Dn::SetImageList(CImageList *pImage)
{
	m_pImagelist = pImage;
}
