#if !defined(AFX_CASC_200_ALARM_H__991730D8_7CB3_42EE_8371_BDC4B83B5249__INCLUDED_)
#define AFX_CASC_200_ALARM_H__991730D8_7CB3_42EE_8371_BDC4B83B5249__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_200_alarm.h : header file
//
//#include "CASC_05Dlg.h"
/////////////////////////////////////////////////////////////////////////////
// CCasc_200_alarm dialog

class CCasc_200_alarm : public CDialog
{
// Construction
public:
	CString temp;
	CString str_id;
	CString strsql;
	CString strOper;
	void FreshAlarm();
	CCasc_200_alarm(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_200_alarm)
	enum { IDD = IDD_ALARM };
	CListCtrl	m_list_alarm;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_200_alarm)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:
	_RecordsetPtr m_pRecordset;//记录集对象智能指针
	_ConnectionPtr m_pConnection;//连接对象智能指针
	void FreshList();

	// Generated message map functions
	//{{AFX_MSG(CCasc_200_alarm)
	virtual BOOL OnInitDialog();
	virtual void OnOK();
	afx_msg void OnButtonAlarmOk();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
private:
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_200_ALARM_H__991730D8_7CB3_42EE_8371_BDC4B83B5249__INCLUDED_)
