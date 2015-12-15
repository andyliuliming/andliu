// CASC_05.h : main header file for the CASC_05 application
//

#if !defined(AFX_CASC_05_H__4D350FAB_CC7B_4424_81DC_24D5669A16AB__INCLUDED_)
#define AFX_CASC_05_H__4D350FAB_CC7B_4424_81DC_24D5669A16AB__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#ifndef __AFXWIN_H__
	#error include 'stdafx.h' before including this file for PCH
#endif

#include "resource.h"		// main symbols
#include "CASC_05_i.h"
//宏名定义===================================================================
//数字键盘操作归属名称//为0无操作
#define JOG_ROT_SPD_SET 1//手动
#define JOG_SLV_POS_SET 2
#define JOG_PIN_POS_SET 3
#define JOG_PIN_SLV_UD_SET 4
#define RECIPE_ROT_SPD_DR 5//配方
#define RECIPE_ROT_SPD_1  6
#define RECIPE_ROT_SPD_2  7
#define RECIPE_ROT_SPD_3  8
#define RECIPE_ROT_SPD_4  9
#define RECIPE_ROT_SPD_5  10
#define RECIPE_ROT_SPD_6  11
#define RECIPE_ROT_SPD_7  12
#define RECIPE_ROT_SPD_8  13
#define RECIPE_ROT_SPD_9  14
#define RECIPE_PIN_POS_DR 15
#define RECIPE_PIN_POS_1  16
#define RECIPE_PIN_POS_2  17
#define RECIPE_PIN_POS_3  18
#define RECIPE_PIN_POS_4  19
#define RECIPE_PIN_POS_5  20
#define RECIPE_PIN_POS_6  21
#define RECIPE_PIN_POS_7  22
#define RECIPE_PIN_POS_8  23
#define RECIPE_PIN_POS_9  24
#define RECIPE_SLV_POS_DR 25
#define RECIPE_SLV_POS_1  26
#define RECIPE_SLV_POS_2  27
#define RECIPE_SLV_POS_3  28
#define RECIPE_SLV_POS_4  29
#define RECIPE_SLV_POS_5  30
#define RECIPE_SLV_POS_6  31
#define RECIPE_SLV_POS_7  32
#define RECIPE_SLV_POS_8  33
#define RECIPE_SLV_POS_9  34
#define RECIPE_TIME_1     35
#define RECIPE_TIME_2     36
#define RECIPE_TIME_3     37
#define RECIPE_TIME_4     38
#define RECIPE_TIME_5     39
#define RECIPE_TIME_6     40
#define RECIPE_TIME_7     41
#define RECIPE_TIME_8     42
#define RECIPE_TIME_9     43
//主窗口按键定义
#define MAIN_JOG_MODE     44
#define MAIN_AUTO_MODE    45
#define MAIN_RECIPE       46
//手动模式按键输入
#define JOG_BACK_MAIN     47
#define JOG_ROT_START     48//主轴旋转启动
#define JOG_ROT_START_2   90//主轴反转启动
#define JOG_ROT_LINK      49//主轴联动
#define JOG_SLV_LINK      50//搅拌套联动
#define JOG_SLV_UP        51//搅拌套向上运动
#define JOG_SLV_DN        52//搅拌套向下运动
#define JOG_PIN_UP        53//搅拌针向上运动
#define JOG_PIN_DN        54//搅拌针向下运动
#define JOG_SLV_UP_STOP   55//搅拌套向上运动
#define JOG_SLV_DN_STOP   56//搅拌套向下运动
#define JOG_PIN_UP_STOP   57//搅拌针向上运动
#define JOG_PIN_DN_STOP   58//搅拌针向下运动
#define JOG_BRK_OPEN      59//制动装置打开
#define JOG_COL_OPEN      60//冷却装置打开
#define JOG_GAS_OPEN      61//液压缸打开
#define JOG_CNT_CLEAR     62//计数器清零
#define JOG_MONITOR_AXIS  63//监视与坐标设定
//自动模式按键输入
#define AUTO_BACK_MAIN    64
#define AUTO_DR_OPEN      65//初始旋转
#define AUTO_DR_CLOSE     66//初始旋转关闭
#define AUTO_CANCLE       67//加工取消
#define AUTO_CNT_ZERO     68//计数器清零
//配方激活
#define RECIEPE_SAVE      69//配方激活
//辅助功能
#define AUX_CONST_ROT     70//恒热旋转
#define AUX_CLEAR         71//辅助清理
#define AUX_CLEAR1        72//辅助清理1
#define AUX_CLEAR2        73//辅助清理2
#define AUX_FINI          74//辅助清理完毕
#define AUX_ALIGN_START   75//自动对刀开始
#define AUX_ALIGN_CONFIRM 76//自动对刀确认
#define AUX_ALIGN_BACK    77//自动对刀返回
#define AUX_ALIGN_ENTER   78//自动对刀进入
#define JOG_AXIS_SET      79//工作坐标设定
#define AUX_HOME_START    80//回原点启动
#define AUX_GAS_OPEN	  81//回原点气阀打开
#define AUX_HOME_PIN	  82//搅拌针回原点
#define AUX_HOME_SLV	  83//搅拌套回原点
#define AUX_HOME_BACK     84//回原点返回
#define AUX_FUNC		  85//辅助功能
//报警
#define ALARM_LIST        86
#define ALARM_LED         87
#define ALARM_LED_S       88
#define ALARM_LIST_1      89

//网络通讯诊断——错误种类宏定义
#define ERROR_INITIAL  0 //初始化出错
#define ERROR_SOCKET   1 //套接字创建出错
#define ERROR_BIND     2 //汇编出错
#define ERROR_CONNECT  3 //连接出错
#define ERROR_SEND     4 //发送出错
#define ERROR_RECEIVE  5 //接收出错
#define ERROR_SHUTDOWN 6 //关机出错
#define ERROR_CLOSE    7 //线路关闭出错
//自定义消息
#define WM_UM_JOG_MODE			  WM_USER+0x100//手动模式进入
#define WM_UM_JOG_ROT_START		  WM_USER+0x101//手动——旋转电机
#define WM_UM_JOG_ROT_START_2     WM_USER+0x190//手动——旋转电机
#define WM_UM_JOG_ROT_SPD_SET	  WM_USER+0x102//手动——旋转电机速度设定
#define WM_UM_JOG_SLV_POS_SET	  WM_USER+0x103//手动——套目标位置设定
#define WM_UM_JOG_PIN_POS_SET	  WM_USER+0x104//手动——针目标位置设定
#define WM_UM_JOG_PIN_SLV_UD_SET  WM_USER+0x105//手动——搅拌针套进给量设计
#define WM_UM_JOG_BRK_OPEN		  WM_USER+0x106//手动监视——制动刹车
#define WM_UM_JOG_COL_OPEN		  WM_USER+0x107//手动监视——冷却气
#define WM_UM_JOG_GAS_OPEN		  WM_USER+0x108//手动监视——液压缸
#define WM_UM_JOG_BTN_SLV_UP      WM_USER+0x109//手动——套按钮上运动
#define WM_UM_JOG_BTN_SLV_DN      WM_USER+0x110//手动——套按钮下运动
#define WM_UM_JOG_BTN_PIN_UP      WM_USER+0x111//手动——针按钮上运动
#define WM_UM_JOG_BTN_PIN_DN      WM_USER+0x112//手动——针按钮下运动
#define WM_UM_JOG_BTN_SLV_UP_STOP WM_USER+0x113//手动——套按钮上运动
#define WM_UM_JOG_BTN_SLV_DN_STOP WM_USER+0x114//手动——套按钮下运动
#define WM_UM_JOG_BTN_PIN_UP_STOP WM_USER+0x115//手动——针按钮上运动
#define WM_UM_JOG_BTN_PIN_DN_STOP WM_USER+0x116//手动——针按钮下运动
#define WM_UM_JOG_ROT_LINK        WM_USER+0x117//手动——主旋转连动
#define WM_UM_JOG_SLV_LINK        WM_USER+0x118//手动——搅拌套连动
#define WM_UM_JOG_MODE_END		  WM_USER+0x119//手动模式退出
#define WM_UM_AUTO_MODE			  WM_USER+0x120//自动模式进入
#define WM_UM_AUTO_MODE_END		  WM_USER+0x121//自动模式退出
#define WM_UM_AUTO_DR_OPEN		  WM_USER+0x122//自动——DR开始
#define WM_UM_AUTO_DR_CLOSE		  WM_USER+0x123//自动——DR结束
#define WM_UM_AUTO_CANCLE		  WM_USER+0x124//自动——加工取消
#define WM_UM_CNT_ZERO            WM_USER+0x125//自动——计数器清零

#define WM_UM_RECIEPE_SAVE1		  WM_USER+0x126//配方保存
#define WM_UM_RECIEPE_SAVE2		  WM_USER+0x127//配方保存
#define WM_UM_RECIEPE_SAVE3		  WM_USER+0x128//配方保存
#define WM_UM_RECIEPE_SAVE4		  WM_USER+0x129//配方保存

#define WM_UM_AUX_CONST_ROT       WM_USER+0x130//辅助功能——恒热旋转
#define WM_UM_AUX_CLEAR1		  WM_USER+0x131//辅助功能——清洗1
#define WM_UM_AUX_CLEAR2		  WM_USER+0x132//辅助功能——清洗2
#define WM_UM_AUX_FINI			  WM_USER+0x133//辅助功能——清洗2
#define WM_UM_AUX_ALIGN_START	  WM_USER+0x134//辅助功能——自动对刀开始
#define WM_UM_AUX_ALIGN_CONFIRM	  WM_USER+0x135//辅助功能——自动对刀确认
#define WM_UM_AUX_ALIGN_BACK	  WM_USER+0x136//辅助功能——自动对刀返回
#define WM_UM_AUX_ALIGN_ENTER	  WM_USER+0x137//辅助功能——进入自动对刀
//#define WM_UM_AUX_ALIGN_ENTER	  WM_USER+0x137//辅助功能——进入自动对刀
#define WM_UM_JOG_AXIS_SET        WM_USER+0x138//辅助功能——坐标设定
#define WM_UM_AUX_HOME_START	  WM_USER+0x139//辅助功能——电机回原点开始
#define WM_UM_AUX_HOME_PIN		  WM_USER+0x140//辅助功能——PIN电机回原点
#define WM_UM_AUX_HOME_SLV		  WM_USER+0x141//辅助功能——SLV电机回原点
#define WM_UM_AUX_HOME_GAS		  WM_USER+0x142//辅助功能——电机回原点气阀打开
#define WM_UM_AUX_HOME_BACK		  WM_USER+0x143//辅助功能——回原点返回
//报警确认
#define WM_UM_ALARM_OK			  WM_USER+0x144//报警确认
#define WM_UM_ALARM_LED			  WM_USER+0x145//报警灯闪烁
#define WM_UM_ALARM_LED_S		  WM_USER+0x146//报警灯闪烁关
/////////////////////////////////////////////////////////////////////////////
// CCASC_05App:
// See CASC_05.cpp for the implementation of this class
//

class CCASC_05App : public CWinApp
{
public:
	CCASC_05App();

// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CCASC_05App)
	public:
	virtual BOOL InitInstance();
		virtual int ExitInstance();
	//}}AFX_VIRTUAL

// Implementation

	//{{AFX_MSG(CCASC_05App)
		// NOTE - the ClassWizard will add and remove member functions here.
		//    DO NOT EDIT what you see in these blocks of generated code !
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
private:
	BOOL m_bATLInited;
private:
	BOOL InitATL();
};


/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_CASC_05_H__4D350FAB_CC7B_4424_81DC_24D5669A16AB__INCLUDED_)
