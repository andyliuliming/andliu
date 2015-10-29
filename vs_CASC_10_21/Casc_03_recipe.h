#if !defined(AFX_CASC_03_RECIPE_H__86D64146_B61D_4111_8EE5_753DDB0D9A00__INCLUDED_)
#define AFX_CASC_03_RECIPE_H__86D64146_B61D_4111_8EE5_753DDB0D9A00__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Casc_03_recipe.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// CCasc_03_recipe dialog
//数字键盘
extern CString test;
class CCasc_03_recipe : public CDialog
{
// Construction
public:
	void On_z_SetValue_numberkey();
	CCasc_03_recipe(CWnd* pParent = NULL);   // standard constructor

// Dialog Data
	//{{AFX_DATA(CCasc_03_recipe)
	enum { IDD = IDD_CASC_RECIPE };
	CListCtrl	m_list_recipe;
	float	m_edit_pin_1;
	float	m_edit_pin_2;
	float	m_edit_pin_3;
	float	m_edit_pin_4;
	float	m_edit_pin_5;
	float	m_edit_pin_6;
	float	m_edit_pin_7;
	float	m_edit_pin_8;
	float	m_edit_pin_9;
	float	m_edit_pin_dr;
	CString	m_edit_recipe;
	float	m_edit_slv_1;
	float	m_edit_slv_2;
	float	m_edit_slv_3;
	float	m_edit_slv_4;
	float	m_edit_slv_5;
	float	m_edit_slv_6;
	float	m_edit_slv_7;
	float	m_edit_slv_8;
	float	m_edit_slv_9;
	float	m_edit_slv_dr;
	float	m_edit_rot_1;
	float	m_edit_rot_2;
	float	m_edit_rot_3;
	float	m_edit_rot_4;
	float	m_edit_rot_5;
	float	m_edit_rot_6;
	float	m_edit_rot_7;
	float	m_edit_rot_8;
	float	m_edit_rot_9;
	float	m_edit_rot_dr;
	float	m_edit_time_1;
	float	m_edit_time_2;
	float	m_edit_time_3;
	float	m_edit_time_4;
	float	m_edit_time_5;
	float	m_edit_time_6;
	float	m_edit_time_7;
	float	m_edit_time_8;
	float	m_edit_time_9;
	float	m_edit_time_dr;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCasc_03_recipe)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:
	void OnClose();
	void FreshList();
	void EnableInput(BOOL bEnable);
	_ConnectionPtr m_pConnection;//连接对象智能指针
	_RecordsetPtr m_pRecordset;//记录集对象智能指针
	int m_nOperate;//0表示无操作1表示添加2表示修改

	// Generated message map functions
	//{{AFX_MSG(CCasc_03_recipe)
	afx_msg void OnButtonMody();
	afx_msg void OnButtonSav();
	afx_msg void OnButtonDel();
	afx_msg void OnButtonAdd();
	afx_msg void OnButtonCanOpr();
	afx_msg void OnClickListRecipe(NMHDR* pNMHDR, LRESULT* pResult);
	afx_msg void OnDblclkListRecipe(NMHDR* pNMHDR, LRESULT* pResult);
	virtual BOOL OnInitDialog();
	afx_msg void OnSetfocusEditRotDr();
	afx_msg void OnSetfocusEditRot1();
	afx_msg void OnSetfocusEditRot2();
	afx_msg void OnSetfocusEditRot3();
	afx_msg void OnSetfocusEditRot4();
	afx_msg void OnSetfocusEditRot5();
	afx_msg void OnSetfocusEditRot6();
	afx_msg void OnSetfocusEditRot7();
	afx_msg void OnSetfocusEditRot8();
	afx_msg void OnSetfocusEditRot9();
	afx_msg void OnSetfocusEditPinDr();
	afx_msg void OnSetfocusEditPin1();
	afx_msg void OnSetfocusEditPin2();
	afx_msg void OnSetfocusEditPin3();
	afx_msg void OnSetfocusEditPin4();
	afx_msg void OnSetfocusEditPin5();
	afx_msg void OnSetfocusEditPin6();
	afx_msg void OnSetfocusEditPin7();
	afx_msg void OnSetfocusEditPin8();
	afx_msg void OnSetfocusEditPin9();
	afx_msg void OnSetfocusEditSlvDr();
	afx_msg void OnSetfocusEditSlv1();
	afx_msg void OnSetfocusEditSlv2();
	afx_msg void OnSetfocusEditSlv3();
	afx_msg void OnSetfocusEditSlv4();
	afx_msg void OnSetfocusEditSlv5();
	afx_msg void OnSetfocusEditSlv6();
	afx_msg void OnSetfocusEditSlv7();
	afx_msg void OnSetfocusEditSlv8();
	afx_msg void OnSetfocusEditSlv9();
	afx_msg void OnSetfocusEditTime1();
	afx_msg void OnSetfocusEditTime2();
	afx_msg void OnSetfocusEditTime3();
	afx_msg void OnSetfocusEditTime4();
	afx_msg void OnSetfocusEditTime5();
	afx_msg void OnSetfocusEditTime6();
	afx_msg void OnSetfocusEditTime7();
	afx_msg void OnSetfocusEditTime8();
	afx_msg void OnSetfocusEditTime9();
	afx_msg void OnSetfocusEditRecipe();
	afx_msg void OnButtonAct();
	afx_msg void OnAlarm5();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_03_RECIPE_H__86D64146_B61D_4111_8EE5_753DDB0D9A00__INCLUDED_)
