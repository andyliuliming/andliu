// CASC_05Dlg.cpp : implementation file
//

#include "stdafx.h"
#include "CASC_05.h"
#include "CASC_05Dlg.h"
#include "Casc_01_jog.h"
#include "Casc_02_auto.h"
#include "Casc_03_recipe.h"
#include "Casc_04_sys.h"
#include "Casc_06_aux.h"
#include "Casc_101_robot.h"
#include "Casc_200_alarm.h"
#include "WriteQueue.h"
#include "WriteHandler.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif
extern float read_convert;
//写入控制量状态--------------------------------与PLC的写入状态
extern int global_opr_wr_rd;
CEvent global_m_Event_Rd(FALSE, TRUE);
CEvent global_m_Event_Wr(FALSE, FALSE);
extern DWORD m_dwThreadId_Wr;
extern HANDLE m_hThread_Wr;
extern DWORD m_dwThreadId_Rd;
extern HANDLE m_hThread_Rd;
//消息线程函数声明
DWORD WINAPI RdMessageThread(LPVOID pParam);//读线程函数声明
DWORD WINAPI WrMessageThread(LPVOID pParam);//写线程函数声明

extern float global_rot_spd_disp;//旋转速度显示
extern float global_torque_disp;//转矩实时显示
extern bool global_write_file_flag;//记录torque标识
extern WriteQueue global_queue;
extern WriteHandler global_handler;
extern float global_pin_limit_dn;//pin下限位
extern float global_pin_limit_up;//pin上限位
extern float global_slv_limit_dn;//slv下限位
extern float global_slv_limit_up;//slv上限位
extern int   global_up_dn_lim_status;//pin&slv上下限位
extern float global_slv_pos_disp;//slv实时位置显示
extern float global_pin_pos_disp;//pin实时位置显示
extern float global_slv_spd_disp;//slv实时速度显示
extern float global_pin_spd_disp;//pin实时速度显示
extern int   global_slv_up_status;//slv上按钮状态
extern int   global_slv_dn_status;//slv下按钮状态
extern int   global_pin_up_status;//pin上按钮状态
extern int   global_pin_dn_status;//pin下按钮状态
extern int   global_pin_slv_btn_st;//pin&slv按钮状态

extern int   global_i_char_to_float;
extern int   global_m;
extern float global_edit_pin[10];
extern float global_edit_slv[10];
extern float global_edit_time[10];
extern float global_edit_rot[10];
extern char	 global_recipe_rot_spd[10][8];
extern char	 global_recipe_pin_pos[10][8];
extern char	 global_recipe_slv_pos[10][8];
extern char	 global_recipe_time[10][8];
extern int   global_slv_latch;
extern int   global_pin_latch;
extern char  global_pin_obj[9];
extern char  global_slv_obj[9];
extern int   global_pin_obj_status;
extern int   global_slv_obj_status;
extern float global_pin_obj_mid;
extern float global_slv_obj_mid;
extern int   global_aux_hot_status;
extern int   global_jog_axis_status;
extern float global_pin_axis_set;
extern float global_slv_axis_set;
extern int   global_jog_rot_link;
extern int   global_jog_slv_link;
extern int   global_home_start;
extern int   global_home_gas;
extern float global_weild_show_time;
extern int   global_display_1;
extern int   global_display_2;
extern int   global_display_3;
extern int   global_display_4;
extern int   global_display_5;
extern int   global_display_6;
extern int   global_display_7;
extern int   global_display_8;
extern int   global_exe_sen_status;//自动用
extern int   global_paint;
extern int   global_home_pin;
extern int   global_home_slv;
extern bool  global_alarm_status;
extern char  r_buf_alarm_m[6];
//分页
extern int   global_windows_num;

extern int   global_align_slv_s;
extern int   global_align_slv_f;
extern int   global_align_pin_s;
extern int   global_align_pin_f;
/////////////////////////////////////////////////////////////////////////////
// CAboutDlg dialog used for App About

class CAboutDlg : public CDialog
{
public:
    CAboutDlg();

    // Dialog Data
        //{{AFX_DATA(CAboutDlg)
    enum { IDD = IDD_ABOUTBOX };
    //}}AFX_DATA

    // ClassWizard generated virtual function overrides
    //{{AFX_VIRTUAL(CAboutDlg)
protected:
    virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
    //}}AFX_VIRTUAL

// Implementation
protected:
    //{{AFX_MSG(CAboutDlg)
    //}}AFX_MSG
    DECLARE_MESSAGE_MAP()
};

CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
{
    //{{AFX_DATA_INIT(CAboutDlg)
    //}}AFX_DATA_INIT
}

void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
    CDialog::DoDataExchange(pDX);
    //{{AFX_DATA_MAP(CAboutDlg)
    //}}AFX_DATA_MAP
}

BEGIN_MESSAGE_MAP(CAboutDlg, CDialog)
    //{{AFX_MSG_MAP(CAboutDlg)
    //}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCASC_05Dlg dialog

CCASC_05Dlg::CCASC_05Dlg(CWnd* pParent /*=NULL*/)
    : CDialog(CCASC_05Dlg::IDD, pParent)
{
    //{{AFX_DATA_INIT(CCASC_05Dlg)
        // NOTE: the ClassWizard will add member initialization here
    //}}AFX_DATA_INIT
    // Note that LoadIcon does not require a subsequent DestroyIcon in Win32
    m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CCASC_05Dlg::DoDataExchange(CDataExchange* pDX)
{
    CDialog::DoDataExchange(pDX);
    //{{AFX_DATA_MAP(CCASC_05Dlg)
        // NOTE: the ClassWizard will add DDX and DDV calls here
    //}}AFX_DATA_MAP
}

BEGIN_MESSAGE_MAP(CCASC_05Dlg, CDialog)
    //{{AFX_MSG_MAP(CCASC_05Dlg)
    ON_WM_SYSCOMMAND()
    ON_WM_PAINT()
    ON_WM_QUERYDRAGICON()
    ON_BN_CLICKED(IDC_CASC_AUTO, OnCascAuto)
    ON_BN_CLICKED(IDC_CASC_JOG, OnCascJog)
    ON_BN_CLICKED(IDC_CASC_RECIPE, OnCascRecipe)
    ON_BN_CLICKED(IDC_CASC_SYS, OnCascSys)
    ON_BN_CLICKED(IDC_FULL, OnFull)
    ON_WM_SHOWWINDOW()
    ON_WM_CREATE()
    ON_BN_CLICKED(IDC_CASC_AUX1, OnCascAux1)
    ON_BN_CLICKED(IDC_LINK, OnLink)
    ON_BN_CLICKED(IDC_CASC_ROBOT, OnCascRobot)
    ON_BN_CLICKED(IDC_CASC_CONST_ROT, OnCascConstRot)
    ON_BN_CLICKED(IDC_ALARM1, OnAlarm1)
    //}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// CCASC_05Dlg message handlers

BOOL CCASC_05Dlg::OnInitDialog()
{
    CDialog::OnInitDialog();

    // Add "About..." menu item to system menu.

    // IDM_ABOUTBOX must be in the system command range.
    ASSERT((IDM_ABOUTBOX & 0xFFF0) == IDM_ABOUTBOX);
    ASSERT(IDM_ABOUTBOX < 0xF000);

    CMenu* pSysMenu = GetSystemMenu(FALSE);
    if (pSysMenu != NULL)
    {
        CString strAboutMenu;
        strAboutMenu.LoadString(IDS_ABOUTBOX);
        if (!strAboutMenu.IsEmpty())
        {
            pSysMenu->AppendMenu(MF_SEPARATOR);
            pSysMenu->AppendMenu(MF_STRING, IDM_ABOUTBOX, strAboutMenu);
        }
    }

    // Set the icon for this dialog.  The framework does this automatically
    //  when the application's main window is not a dialog
    SetIcon(m_hIcon, TRUE);			// Set big icon
    SetIcon(m_hIcon, FALSE);		// Set small icon


    CFont* pFont_main_title = new CFont;
    CFont* pFont_aux_title = new CFont;
    if (pFont_main_title != NULL)
        pFont_main_title->CreateFont(
            60, 0, 0, 0, FW_NORMAL, FALSE,
            FALSE, 0, DEFAULT_CHARSET, OUT_DEFAULT_PRECIS,
            CLIP_DEFAULT_PRECIS, DEFAULT_QUALITY,
            DEFAULT_PITCH | FF_SWISS, "华文楷体");
    if (pFont_aux_title != NULL)
        pFont_aux_title->CreateFont(
            25, 0, 0, 0, FW_NORMAL, FALSE,
            FALSE, 0, DEFAULT_CHARSET, OUT_DEFAULT_PRECIS,
            CLIP_DEFAULT_PRECIS, DEFAULT_QUALITY,
            DEFAULT_PITCH | FF_SWISS, "华文楷体");
    //设置控件字体
    GetDlgItem(IDC_MAIN_TITLE)->SetFont(pFont_main_title);
    GetDlgItem(IDC_AUX_TITLE)->SetFont(pFont_aux_title);
    //}

    //网络通讯================================================================
    m_client = socket(AF_INET, SOCK_STREAM, 0);
    WSADATA wsd;
    WSAStartup(MAKEWORD(2, 2), &wsd);
    //服务器端地址
    sockaddr_in serveraddr;

    UpdateData(TRUE);
    serveraddr.sin_family = AF_INET;
    serveraddr.sin_port = htons(0x2000);//m_port);
    serveraddr.sin_addr.S_un.S_addr = inet_addr("192.168.1.1");//(m_IP);
    //serveraddr.sin_port = htons(m_port);
    //serveraddr.sin_addr.S_un.S_addr = inet_addr(m_IP);

    //绑定套接字
    bind(m_client, (sockaddr*)&serveraddr, sizeof(serveraddr));

    //连接服务器
    if (connect(m_client, (sockaddr*)&serveraddr, sizeof(serveraddr)) != 0)
    {
        MessageBox("连接失败");
    }
    else
    {
        m_client_static = m_client;
        //MessageBox("连接成功");
    }
    //网络通讯================================================================
    //线程====================================================================
    m_hThread_Rd = CreateThread(NULL, 0UL, RdMessageThread, NULL, CREATE_SUSPENDED, &m_dwThreadId_Rd);//读线程创建
    m_hThread_Wr = CreateThread(NULL, 0UL, WrMessageThread, NULL, CREATE_SUSPENDED, &m_dwThreadId_Wr);//写线程创建
    if (m_hThread_Rd == INVALID_HANDLE_VALUE)//创建读线程不成功
    {
        AfxMessageBox("创建读线程失败!");
        return TRUE;
    }
    if (m_hThread_Wr == INVALID_HANDLE_VALUE)//创建写线程不成功
    {
        AfxMessageBox("创建写线程失败!");
        return TRUE;
    }
    ResumeThread(m_hThread_Rd);//启动读线程
    ResumeThread(m_hThread_Wr);//启动写线程
    thread_status = 1;
    //线程====================================================================
    //变量初始化
    global_up_dn_lim_status = 0;
    global_mode = ALARM_LIST;
    global_alarm_status = FALSE;
    global_m_Event_Rd.SetEvent();
    global_windows_num = 0;//主页
    return TRUE;  // return TRUE  unless you set the focus to a control
}

void CCASC_05Dlg::OnSysCommand(UINT nID, LPARAM lParam)
{
    if ((nID & 0xFFF0) == IDM_ABOUTBOX)
    {
        CAboutDlg dlgAbout;
        dlgAbout.DoModal();
    }
    else
    {
        CDialog::OnSysCommand(nID, lParam);
    }
}

// If you add a minimize button to your dialog, you will need the code below
//  to draw the icon.  For MFC applications using the document/view model,
//  this is automatically done for you by the framework.

void CCASC_05Dlg::OnPaint()
{
    if (IsIconic())
    {
        CPaintDC dc(this); // device context for painting

        SendMessage(WM_ICONERASEBKGND, (WPARAM)dc.GetSafeHdc(), 0);

        // Center icon in client rectangle
        int cxIcon = GetSystemMetrics(SM_CXICON);
        int cyIcon = GetSystemMetrics(SM_CYICON);
        CRect rect;
        GetClientRect(&rect);
        int x = (rect.Width() - cxIcon + 1) / 2;
        int y = (rect.Height() - cyIcon + 1) / 2;

        // Draw the icon
        dc.DrawIcon(x, y, m_hIcon);
    }
    else
    {
        CDialog::OnPaint();
    }

}

// The system calls this to obtain the cursor to display while the user drags
//  the minimized window.
HCURSOR CCASC_05Dlg::OnQueryDragIcon()
{
    return (HCURSOR)m_hIcon;
}

void CCASC_05Dlg::OnCascAuto()
{
    // TODO: Add your control notification handler code here
    //CCASC_05Dlg *pDlg_Auto=new CCASC_05Dlg;
    //pDlg_Auto->Create(IDD_CASC_AUTO,this);
    //pDlg_Auto->ShowWindow(SW_SHOW);//(SW_MAXIMIZE);
    CCasc_02_auto auto_02_window;
    //按键设置位-----------------------
    global_opr_wr_rd = MAIN_AUTO_MODE;
    PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUTO_MODE, NULL, NULL);//(LPARAM)p);
    global_mode = MAIN_AUTO_MODE;
    global_up_dn_lim_status = 0;
    global_exe_sen_status = 0;
    global_windows_num = 2;//自动
    auto_02_window.DoModal();
}

void CCASC_05Dlg::OnCascJog()
{

    CCasc_01_jog jog_01_window;
    //按键设置位-----------------------
    global_up_dn_lim_status = 0;
    global_mode = MAIN_JOG_MODE;
    global_opr_wr_rd = MAIN_JOG_MODE;

    PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_MODE, NULL, NULL);//(LPARAM)p);

    global_windows_num = 1;//手动
    jog_01_window.DoModal();
}

void CCASC_05Dlg::OnCascRecipe()
{

    CCasc_03_recipe recipe_03_window;
    //按键设置位-----------------------

    //---------------------------------
    global_windows_num = 3;//配方设置
    recipe_03_window.DoModal();
}

void CCASC_05Dlg::OnCascSys()
{

    CCasc_04_sys sys_04_window;
    global_windows_num = 4;//手动
    sys_04_window.DoModal();
}

void CCASC_05Dlg::OnFull()
{

    int window_cx = ::GetSystemMetrics(SM_CXSCREEN);//屏幕大小获取cx
    int window_cy = ::GetSystemMetrics(SM_CYSCREEN);//屏幕大小获取cy

    CRect rtClient;
    CRect rtBtn_Jog, rtBtn_Auto, rtBtn_Recipe, rtBtn_Sys;
    CWnd *pWnd_Jog = GetDlgItem(IDC_CASC_JOG);//手动按钮
    CWnd *pWnd_Auto = GetDlgItem(IDC_CASC_AUTO);//自动按钮
    CWnd *pWnd_Recipe = GetDlgItem(IDC_CASC_RECIPE);//配方按钮
    CWnd *pWnd_Sys = GetDlgItem(IDC_CASC_SYS);//系统按钮

    GetClientRect(&rtClient);             //获得对话框客户区屏幕坐标   
    ClientToScreen(&rtClient);            //映射为屏幕坐标

    //获得button屏幕坐标
    pWnd_Jog->GetWindowRect(&rtBtn_Jog);
    pWnd_Auto->GetWindowRect(&rtBtn_Auto);
    pWnd_Recipe->GetWindowRect(&rtBtn_Recipe);
    pWnd_Sys->GetWindowRect(&rtBtn_Sys);

    //获取各button的尺寸
    int bx_jog = rtBtn_Jog.Width();//手动
    int by_jog = rtBtn_Jog.Height();//手动
    int bx_Auto = rtBtn_Auto.Width();//自动
    int by_Auto = rtBtn_Auto.Height();//自动
    int bx_Recipe = rtBtn_Recipe.Width();//配方
    int by_Recipe = rtBtn_Recipe.Height();//配方
    int bx_Sys = rtBtn_Sys.Width();//系统
    int by_Sys = rtBtn_Sys.Height();//系统

    //获得全屏后离主窗口边框的距离坐标
    //int dx_jog=rtClient.right-rtBtn_Jog.right;//手动右
    int dx_jog = rtBtn_Jog.left - rtClient.left;//手动左
    int dy_jog = rtClient.bottom - rtBtn_Jog.bottom;//手动底
    int dx_Auto = rtBtn_Auto.left - rtClient.left;//自动右
    int dy_Auto = rtClient.bottom - rtBtn_Auto.bottom;//自动底
    int dx_Recipe = rtBtn_Recipe.left - rtClient.left;//配方右
    int dy_Recipe = rtClient.bottom - rtBtn_Recipe.bottom;//配方底
    int dx_Sys = rtClient.right - rtBtn_Sys.right;//系统右
    int dy_Sys = rtClient.bottom - rtBtn_Sys.bottom;//系统底

    //窗口最大化
    MoveWindow(CRect(0, 0, window_cx, window_cy));
    pWnd_Jog->MoveWindow(CRect(window_cx - dx_jog - bx_jog, window_cy - dy_jog - by_jog, window_cx - dx_jog, window_cy - dy_jog));
    pWnd_Jog->MoveWindow(CRect(dx_jog, window_cy - dy_jog - by_jog, dx_jog + bx_jog, window_cy - dy_jog));
    pWnd_Auto->MoveWindow(CRect(dx_Auto + 160, window_cy - dy_Auto - by_Auto, dx_Auto + bx_Auto + 160, window_cy - dy_Auto));
    pWnd_Recipe->MoveWindow(CRect(dx_Recipe + 320, window_cy - dy_Recipe - by_Recipe, dx_Recipe + bx_Recipe + 320, window_cy - dy_Recipe));
    pWnd_Sys->MoveWindow(CRect(window_cx - dx_Sys - bx_Sys, window_cy - dy_Sys - by_Sys, window_cx - dx_Sys, window_cy - dy_Sys));

}

void CCASC_05Dlg::PostNcDestroy()
{
    // TODO: Add your specialized code here and/or call the base class
    delete this;
    CDialog::PostNcDestroy();
}

void CCASC_05Dlg::OnShowWindow(BOOL bShow, UINT nStatus)
{
    CDialog::OnShowWindow(bShow, nStatus);

    // TODO: Add your message handler code here

}

int CCASC_05Dlg::OnCreate(LPCREATESTRUCT lpCreateStruct)
{
    if (CDialog::OnCreate(lpCreateStruct) == -1)
        return -1;

    // TODO: Add your specialized creation code here

    return 0;
}

void CCASC_05Dlg::OnCascAux1()
{
    // TODO: Add your control notification handler code here
    CCasc_06_aux aux_06_window;
    global_mode = AUX_FUNC;
    global_windows_num = 6;//辅助功能
    aux_06_window.DoModal();
}

void CCASC_05Dlg::OnOK()
{
    // TODO: Add extra validation here

    CDialog::OnOK();
}

void CCASC_05Dlg::OnLink()
{
    // TODO: Add your control notification handler code here

}
//网络通讯——诊断
void CCASC_05Dlg::Sockerror(int error_kind)
{
    if (error_kind == ERROR_INITIAL)
    {
        MessageBox("初始化处理异常");
    }
    else
    {
        nErrorStatus = WSAGetLastError();
        switch (error_kind)
        {
        case ERROR_SOCKET:
            MessageBox("套接字创建异常");
            break;
        case ERROR_BIND:
            MessageBox("套接字绑定异常");
            break;
        case ERROR_CONNECT:
            MessageBox("套接字连接异常");
            break;
        case ERROR_SEND:
            MessageBox("发送异常");
            break;
        case ERROR_RECEIVE:
            MessageBox("接收异常");
            break;
        case ERROR_SHUTDOWN:
            MessageBox("关机异常");
            break;
        case ERROR_CLOSE:
            MessageBox("线路关闭异常");
            break;
        }
    }
}
//网络通讯——读取数据
void CCASC_05Dlg::Msg_RD()
{
    int length = 0;
    int k = 0;
    m_client = (SOCKET)m_client_static;
    //****************************************************************************************
    //************主页与报警页****************************************************************
    //****************************************************************************************
    //报警监控================================================================================
    if (global_mode == ALARM_LIST)
    {
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);

            //消除报警
            if (strcmp(r_buf_static, alarm_safe) > 0)
            {
                CCasc_200_alarm alarm;
                global_alarm_status = FALSE;
                for (int j = 0; j <= 32; j = j + 4)
                {
                    r_buf_alarm[j] = r_buf_static[22 + j];
                    r_buf_alarm[j + 1] = r_buf_static[22 + j + 1];
                    r_buf_alarm[j + 2] = r_buf_static[22 + j + 2];
                    r_buf_alarm[j + 3] = r_buf_static[22 + j + 3];
                }
                //global_m_Event_Rd.ResetEvent();
                //报警灯闪烁
                //if(global_alarm_status==FALSE)
                //{
                global_opr_wr_rd = ALARM_LED;
                PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                global_alarm_status = TRUE;
                //}
            }
            //报警灯关
            if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
            {
                //if(global_alarm_status==FALSE)
                //{
                global_opr_wr_rd = ALARM_LED_S;
                PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                global_alarm_status = TRUE;
                //}
            }
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //其余M变量报警-----------------------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[29] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);


            //消除报警
            if (strcmp(r_buf_static, alarm_safe_m) != 0)
            {
                CCasc_200_alarm alarm;
                global_alarm_status = FALSE;
                //报警灯闪烁
                //if(global_alarm_status==FALSE)
                //{
                global_opr_wr_rd = ALARM_LED;
                PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                for (int j = 0; j <= 5; j++)
                {
                    r_buf_alarm_m[j] = r_buf_static[22 + j];
                }
                //global_alarm_status=TRUE;
            //}
            }
            //报警灯关
            if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
            {
                //if(global_alarm_status==FALSE)
                //{
                global_opr_wr_rd = ALARM_LED_S;
                PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                //global_alarm_status=TRUE;
            //}
            }
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //------------------------------------------------------------------------------------
    }
    //****************************************************************************************
    //****************************************************************************************
    //========================================================================================
    if (global_mode == MAIN_JOG_MODE)//手动模式主页
    {
        //手动模式——主页----------------------------------------------------------------
        //strcpy(s_buf,"500000FF03FF000018000A04010000D*0030300002");
        //===============================================================
        //手动报警界面
        if (k >= 4)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                //消除报警
                if (strcmp(r_buf_static, alarm_safe) > 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    for (int j = 0; j <= 32; j = j + 4)
                    {
                        r_buf_alarm[j] = r_buf_static[22 + j];
                        r_buf_alarm[j + 1] = r_buf_static[22 + j + 1];
                        r_buf_alarm[j + 2] = r_buf_static[22 + j + 2];
                        r_buf_alarm[j + 3] = r_buf_static[22 + j + 3];
                    }
                    //global_m_Event_Rd.ResetEvent();
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            //其余M变量报警-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[29] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);

                //消除报警
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    for (int j = 0; j <= 5; j++)
                    {
                        r_buf_alarm_m[j] = r_buf_static[22 + j];
                    }
                    //global_alarm_status=TRUE;
                //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    //global_alarm_status=TRUE;
                //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            k = 0;
        }
        k++;
        //------------------------------------------------------------------------------------
            //=============================================================
            //上下极限位置显示
            //if(global_up_dn_lim_status==0)
            //{
                //pin上限位------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0003000002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_limit_up = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
            {
                global_m_Event_Rd.ResetEvent();
            }
        }
        //pin下限位------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0003020002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_limit_dn = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
            {
                global_m_Event_Rd.ResetEvent();
            }
        }
        //slv上限位------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0003040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_limit_up = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
            {
                global_m_Event_Rd.ResetEvent();
            }
        }
        //slv下限位------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0003060002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_limit_dn = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
            {
                global_m_Event_Rd.ResetEvent();
            }
        }
        //global_up_dn_lim_status=1;
    //}	

    //旋转速度显示		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        //this->Float_To_Char();
        //global_rot_spd_disp=read_convert;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_rot_spd_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }

        //MessageBox(r_buf);
        //slv动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }


    }
    //****************************************************************************************
    //****************************************************************************************
    if (global_mode == MAIN_AUTO_MODE)//自动模式主页
    {
        //自动模式——主页----------------------------------------------------------------
        //===============================================================
        //自动报警界面
        if (k >= 2)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                //消除报警
                if (strcmp(r_buf_static, alarm_safe) > 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    for (int j = 0; j <= 32; j = j + 4)
                    {
                        r_buf_alarm[j] = r_buf_static[22 + j];
                        r_buf_alarm[j + 1] = r_buf_static[22 + j + 1];
                        r_buf_alarm[j + 2] = r_buf_static[22 + j + 2];
                        r_buf_alarm[j + 3] = r_buf_static[22 + j + 3];
                    }
                    //global_m_Event_Rd.ResetEvent();
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            //其余M变量报警-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[29] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);

                //消除报警
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    for (int j = 0; j <= 5; j++)
                    {
                        r_buf_alarm_m[j] = r_buf_static[22 + j];
                    }
                    //global_alarm_status=TRUE;
                //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    //global_alarm_status=TRUE;
                //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            k = 0;
        }
        k++;
        //旋转速度显示		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        this->Float_To_Char();
        global_rot_spd_disp = read_convert;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_rot_spd_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //torque转矩值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        //this->Float_To_Char();
        //global_rot_spd_disp=read_convert;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_torque_disp = read_convert;
            //MessageBox(r_buf);
            //wendy add 2015/10/21


            if (global_display_8 == 1)
            {
                global_handler.StartWrite();
                global_queue.EnQueue(global_torque_disp);//开始记录文件
            }
            else
            {
                global_handler.StopWrite();
            }

            //wendy add
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //MessageBox(r_buf);
        //slv动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //焊接点计数器
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0020880002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_weild_show_time = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //上下极限位置显示
        if (global_up_dn_lim_status == 0)
        {
            //pin上限位------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003000002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                this->Float_To_Char();
                global_pin_limit_up = read_convert;
                //MessageBox(r_buf);
            }
            else
            {
                while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
                {
                    global_m_Event_Rd.ResetEvent();
                }
            }
            //pin下限位------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003020002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                this->Float_To_Char();
                global_pin_limit_dn = read_convert;
                //MessageBox(r_buf);
            }
            else
            {
                while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
                {
                    global_m_Event_Rd.ResetEvent();
                }
            }
            //slv上限位------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003040002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                this->Float_To_Char();
                global_slv_limit_up = read_convert;
                //MessageBox(r_buf);
            }
            else
            {
                while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
                {
                    global_m_Event_Rd.ResetEvent();
                }
            }
            //slv下限位------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003060002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                this->Float_To_Char();
                global_slv_limit_dn = read_convert;
                //MessageBox(r_buf);
            }
            else
            {
                while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
                {
                    global_m_Event_Rd.ResetEvent();
                }
            }
            global_up_dn_lim_status = 1;
        }
        //传感器与执行机构
        if (global_exe_sen_status == 0)
        {

            //C型架处于工作位置
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0001230001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                global_display_1 = r_buf[22] - 48;
                //MessageBox(r_buf);
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            //C型架处于导轨尾部
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0001240001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                global_display_2 = r_buf[22] - 48;
                //MessageBox(r_buf);
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            //气路压力传感器
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0001000001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                global_display_3 = r_buf[22] - 48;
                //MessageBox(r_buf);
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }

            //制动装置开
            strcpy(s_buf, "500000FF03FF000018000A04010001Y*0000350001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                global_display_6 = r_buf[22] - 48;
                //MessageBox(r_buf);
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            //冷却气体开
            strcpy(s_buf, "500000FF03FF000018000A04010001Y*0000340001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                global_display_7 = r_buf[22] - 48;
                //MessageBox(r_buf);
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            //液压缸开
            strcpy(s_buf, "500000FF03FF000018000A04010001Y*0000330001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                global_display_8 = r_buf[22] - 48;
                //MessageBox(r_buf);
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
        }
    }
    //****************************************************************************************
    //****************************************************************************************
    if (global_mode == JOG_MONITOR_AXIS)
    {
        //手动监视报警界面
        if (k >= 2)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                //消除报警
                if (strcmp(r_buf_static, alarm_safe) > 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    for (int j = 0; j <= 32; j = j + 4)
                    {
                        r_buf_alarm[j] = r_buf_static[22 + j];
                        r_buf_alarm[j + 1] = r_buf_static[22 + j + 1];
                        r_buf_alarm[j + 2] = r_buf_static[22 + j + 2];
                        r_buf_alarm[j + 3] = r_buf_static[22 + j + 3];
                    }
                    //global_m_Event_Rd.ResetEvent();
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            //其余M变量报警-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[29] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);

                //消除报警
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    for (int j = 0; j <= 5; j++)
                    {
                        r_buf_alarm_m[j] = r_buf_static[22 + j];
                    }
                    //global_alarm_status=TRUE;
                //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    //global_alarm_status=TRUE;
                //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            k = 0;
        }
        k++;
        //手动——监控与坐标设定----------------------------------------------------------------
        if (global_up_dn_lim_status == 0)
        {
            //pin上限位------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003000002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                this->Float_To_Char();
                global_pin_limit_up = read_convert;
                //MessageBox(r_buf);
            }
            else
            {
                while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
                {
                    global_m_Event_Rd.ResetEvent();
                }
            }
            //pin下限位------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003020002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                this->Float_To_Char();
                global_pin_limit_dn = read_convert;
                //MessageBox(r_buf);
            }
            else
            {
                while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
                {
                    global_m_Event_Rd.ResetEvent();
                }
            }
            //slv上限位------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003040002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                this->Float_To_Char();
                global_slv_limit_up = read_convert;
                //MessageBox(r_buf);
            }
            else
            {
                while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
                {
                    global_m_Event_Rd.ResetEvent();
                }
            }
            //slv下限位------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003060002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                this->Float_To_Char();
                global_slv_limit_dn = read_convert;
                //MessageBox(r_buf);
            }
            else
            {
                while (!((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48)))
                {
                    global_m_Event_Rd.ResetEvent();
                }
            }
            global_up_dn_lim_status = 1;
        }
        //slv动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //slv坐标设定值
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0020820002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_axis_set = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin坐标设定值
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0020800002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_axis_set = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //C型架处于工作位置
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001230001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_display_1 = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //C型架处于导轨尾部
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001240001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_display_2 = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //气路压力传感器
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001000001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_display_3 = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //搅拌套上限位传感器
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001260001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_display_4 = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //搅拌针上限位传感器
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001250001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_display_5 = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //制动装置开
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001220001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_display_6 = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //冷却气体开
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001210001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_display_7 = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //液压缸开
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001200001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_display_8 = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
    }
    //************************************************************************************************
    //************************************************************************************************
    if (global_mode == AUX_ALIGN_ENTER)//辅助自动对刀
    {
        //旋转速度显示		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        this->Float_To_Char();
        global_rot_spd_disp = read_convert;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_rot_spd_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //MessageBox(r_buf);
        //slv动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //slv进给值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0004260002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_spd_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin进给值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0004220002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_spd_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //slv对刀开始
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0000600001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_align_slv_s = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //slv对刀完成
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0000930001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_align_slv_f = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin对刀开始
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0000500001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_align_pin_s = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin对刀完成
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0000920001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_align_pin_f = r_buf[22] - 48;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
    }
    //**********************************************************************************************
    if (global_mode == AUX_CLEAR)//辅助清洗
    {
        //辅助清洗报警界面
        if (k >= 2)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                //消除报警
                if (strcmp(r_buf_static, alarm_safe) > 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    for (int j = 0; j <= 32; j = j + 4)
                    {
                        r_buf_alarm[j] = r_buf_static[22 + j];
                        r_buf_alarm[j + 1] = r_buf_static[22 + j + 1];
                        r_buf_alarm[j + 2] = r_buf_static[22 + j + 2];
                        r_buf_alarm[j + 3] = r_buf_static[22 + j + 3];
                    }
                    //global_m_Event_Rd.ResetEvent();
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            //其余M变量报警-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[29] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);

                //消除报警
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    for (int j = 0; j <= 5; j++)
                    {
                        r_buf_alarm_m[j] = r_buf_static[22 + j];
                    }
                    //global_alarm_status=TRUE;
                //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    //global_alarm_status=TRUE;
                //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            k = 0;
        }
        k++;
        //旋转速度显示		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        this->Float_To_Char();
        global_rot_spd_disp = read_convert;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_rot_spd_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //MessageBox(r_buf);
        //slv动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
    }
    //*****************************************************************************************
    if (global_mode == AUX_FUNC)//辅助功能显示
    {
        //辅助报警界面
        if (k >= 2)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[length] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);
                //消除报警
                if (strcmp(r_buf_static, alarm_safe) > 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    for (int j = 0; j <= 32; j = j + 4)
                    {
                        r_buf_alarm[j] = r_buf_static[22 + j];
                        r_buf_alarm[j + 1] = r_buf_static[22 + j + 1];
                        r_buf_alarm[j + 2] = r_buf_static[22 + j + 2];
                        r_buf_alarm[j + 3] = r_buf_static[22 + j + 3];
                    }
                    //global_m_Event_Rd.ResetEvent();
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            //其余M变量报警-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
            {
                Sockerror(ERROR_SEND);//发送出错处理
                //return(SOCK_NG);
            }
            length = recv(m_client, r_buf, BUF_SIZE, 0);
            if (length == SOCKET_ERROR)
            {
                Sockerror(ERROR_RECEIVE);
                //return(SOCK_NG);
            }
            r_buf[29] = 0;
            if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
            {
                global_m_Event_Rd.SetEvent();
                strcpy(r_buf_static, r_buf);

                //消除报警
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //报警灯闪烁
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    for (int j = 0; j <= 5; j++)
                    {
                        r_buf_alarm_m[j] = r_buf_static[22 + j];
                    }
                    //global_alarm_status=TRUE;
                //}
                }
                //报警灯关
                if ((strcmp(r_buf_static, alarm_safe) <= 0) && (strcmp(r_buf_static, alarm_safe_m) == 0))
                {
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED_S;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED_S, NULL, NULL);
                    //global_alarm_status=TRUE;
                //}
                }
            }
            else
            {
                global_m_Event_Rd.ResetEvent();
            }
            k = 0;
        }
        k++;
        //旋转速度显示		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        this->Float_To_Char();
        global_rot_spd_disp = read_convert;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_rot_spd_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //MessageBox(r_buf);
        //slv动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_slv_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        //pin动态窗口值显示
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            this->Float_To_Char();
            global_pin_pos_disp = read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
    }
    if (global_mode == AUX_HOME_START)//回原点状态监控
    {
        //----------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0002380001");//搅拌针回原点
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        //this->Float_To_Char();
        //global_rot_spd_disp=read_convert;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_home_pin = r_buf[22] - 48;
            //this->Float_To_Char();
            //global_rot_spd_disp=read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0002580001");//搅拌套回原点
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
            //return(SOCK_NG);
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        //this->Float_To_Char();
        //global_rot_spd_disp=read_convert;
        if ((r_buf[18] == 48) && (r_buf[19] == 48) && (r_buf[20] == 48) && (r_buf[21] == 48))
        {
            global_m_Event_Rd.SetEvent();
            strcpy(r_buf_static, r_buf);
            global_home_slv = r_buf[22] - 48;//回原点信号完成反馈
            //this->Float_To_Char();
            //global_rot_spd_disp=read_convert;
            //MessageBox(r_buf);
        }
        else
        {
            global_m_Event_Rd.ResetEvent();
        }

    }

}
//网络通讯——写入数据
void CCASC_05Dlg::Msg_WR()
{
    int length;
    m_client = (SOCKET)m_client_static;


    switch (global_opr_num_key)
    {
        //手动模式
    case JOG_ROT_SPD_SET: {
        strcpy(s_buf, "500000FF03FF000020000A14010000D*0001600002");
        strcat(s_buf, m_char_to_float);
        break; }//主轴旋转目标速度
    case JOG_SLV_POS_SET: {
        strcpy(s_buf, "500000FF03FF000020000A14010000D*0030320002");
        strcat(s_buf, m_char_to_float);
        break; }//套目标位置
    case JOG_PIN_POS_SET: {
        strcpy(s_buf, "500000FF03FF000020000A14010000D*0030300002");
        strcat(s_buf, m_char_to_float);
        break; }//针目标位置
    case JOG_PIN_SLV_UD_SET: {
        strcpy(s_buf, "500000FF03FF000020000A14010000D*0001640002");
        strcat(s_buf, m_char_to_float);
        break; }//搅拌针套进给量设计
    }

    switch (global_opr_wr_rd)
    {
        //手动模式
    case MAIN_JOG_MODE: {
        //strcpy(s_buf,"500000FF03FF000019000A14010001M*00001200011");
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00001201M*00007000");
        break; }//手动——进入手动准备
    case JOG_BACK_MAIN: {
        //strcpy(s_buf,"500000FF03FF000019000A14010001M*00001200010");
        strcpy(s_buf, "500000FF03FF00005E000A1402000108M*00000000M*00001200M*00001000M*00001100M*00012000M*00012100M*00012200M*00012700");
        break; }//手动——退出手动模式
    //手动模式——主页
    case JOG_ROT_START: {
        if (global_jog_rot_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000000011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000000010");
        break; }//手动——主轴旋转启动
    case JOG_ROT_START_2: {
        if (global_jog_rot_status_2 == 1) strcpy(s_buf, "500000FF03FF000019000A14010001M*00009400011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00009400010");
        break;
    }
    case JOG_SLV_UP: {
        if (global_slv_up_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000300011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000300010");
        //global_m_Event_Wr.ResetEvent();
        break; }//手动——套按钮上运动
    case JOG_SLV_DN: {
        if (global_slv_dn_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000400011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000400010");
        //global_m_Event_Wr.ResetEvent();
        break; }//手动——套按钮下运动
    case JOG_PIN_UP: {
        if (global_pin_up_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000100011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000100010");
        //global_m_Event_Wr.ResetEvent();
        break; }//手动——针按钮上运动
    case JOG_PIN_DN: {
        if (global_pin_dn_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000200011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000200010");
        //global_m_Event_Wr.ResetEvent();
        break; }//手动——针按钮下运动
    //手动模式——监视
    case JOG_BRK_OPEN: {
        if (global_jog_brk_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012200011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012200010");
        break; }//手动——制动刹车打开
    case JOG_COL_OPEN: {
        if (global_jog_col_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012100011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012100010");
        break; }//手动——冷却气打开
    case JOG_GAS_OPEN: {
        if (global_jog_gas_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012000011");
        else strcpy(s_buf, "500000FF03FF000019000A14010001M*00012000010");
        break; }//手动——气液缸打开
    case JOG_CNT_CLEAR: {
        break; }//手动——计数器清零
    case JOG_SLV_LINK: {
        if (global_jog_slv_link == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001100011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001100010");
        break; }//手动——搅拌套连动
    case JOG_ROT_LINK: {
        if (global_jog_rot_link == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001000011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001000010");
        break; }//手动——搅拌套连动
    //自动模式
    case MAIN_AUTO_MODE: {
        strcpy(s_buf, "500000FF03FF000019000A14010001M*00001400011");
        break; }//自动——进入自动准备
    case AUTO_BACK_MAIN: {
        strcpy(s_buf, "500000FF03FF00004A000A1402000106M*00001400M*00008001M*00013500M*00013000M*00001900M*00007001");
        break; }//自动——退出自动准备
    case AUTO_DR_OPEN: {
        strcpy(s_buf, "500000FF03FF00002C000A1402000103M*00001901M*00008000M*00007000");
        break; }//自动——初始旋转开
    case AUTO_DR_CLOSE: {
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00008001M*00001900");
        break; }//自动——初始旋转关
    case AUTO_CANCLE: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00015201");
        break; }//自动——加工取消
    case AUTO_CNT_ZERO: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00013901");
        break; }//自动——加工取消
    case RECIEPE_SAVE: {
        strcpy(s_buf, "500000FF03FF000060000A14010000D*0020020012");
        for (int i = 1; i <= 9; i++)
        {
            strcat(s_buf, global_recipe_time[i]);
        }
        for (int q = 114; q <= 299; q++)
        {
            if (q == 114) { s_buf[q] = 0; }
            else { s_buf[q] = -52; }
        }
        break; }//配方——激活

    case AUX_CONST_ROT: {
        if (global_aux_hot_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00007000011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00007000010");
        break; }//辅助功能——恒热旋转
    case AUX_CLEAR1: {
        strcpy(s_buf, "500000FF03FF00002C000A1402000103M*00007000M*00007101M*00007200");
        break; }//辅助功能——辅助清洗1
    case AUX_CLEAR2: {
        strcpy(s_buf, "500000FF03FF00002C000A1402000103M*00007000M*00007100M*00007201");
        break; }//辅助功能——辅助清洗2
    case AUX_FINI: {
        strcpy(s_buf, "500000FF03FF00002C000A1402000103M*00007000M*00007100M*00007200");
        break; }//辅助功能——辅助清洗完成
    case AUX_ALIGN_START: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00009101");
        break; }//辅助功能——对刀开始
    case AUX_ALIGN_CONFIRM: {
        strcpy(s_buf, "500000FF03FF00005E000A1402000108M*00009000M*00009100M*00039900M*00002200M*00009200M*00009300M*00002300M*00001201");
        break; }//辅助功能——对刀确认
    case AUX_ALIGN_BACK: {
        strcpy(s_buf, "500000FF03FF000054000A1402000107M*00009000M*00009100M*00039900M*00002200M*00009200M*00009300M*00002300");
        break; }//辅助功能——对刀返回
    case AUX_ALIGN_ENTER: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00009001");
        break; }//辅助功能——对刀进入
    case AUX_HOME_START: {
        if (global_home_start == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001300011");
        else strcpy(s_buf, "500000FF03FF000019000A14010001M*00001300010");
        break; }//辅助功能——回原点开始
    case AUX_GAS_OPEN: {
        if (global_home_gas == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012800011");
        else strcpy(s_buf, "500000FF03FF000019000A14010001M*00012800010");
        break; }//辅助功能——回原点气阀打开
    case AUX_HOME_PIN: {
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00001501M*00001600");
        break; }//辅助功能——pin回原点
    case AUX_HOME_SLV: {
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00001500M*00001601");
        break; }//辅助功能——slv回原点
    case AUX_HOME_BACK: {
        strcpy(s_buf, "500000FF03FF000036000A1402000104M*00001300M*00012800M*00001500M*00001600");
        break; }//辅助功能——回原点返回
    case JOG_AXIS_SET: {
        if (global_jog_axis_status == 0)
        {
            //wen33 add, need to delete

            //wen33 add, need to delete
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012700011");
        }
        break; }//辅助功能——坐标设定

    case ALARM_LED: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00051301");
        break;//报警灯开
    }
    case ALARM_LED_S: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00051300");
        break;//报警灯关
    }
    case ALARM_LIST_1: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00004801");
        break;//错误确认
    }
    }
    //while(r_buf_static[18]==0&&r_buf_static[19]==0&&r_buf_static[20]==0&&r_buf_static[21]==0){}
    if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
    {
        Sockerror(ERROR_SEND);//发送出错处理
    }
    length = recv(m_client, r_buf, BUF_SIZE, 0);
    if (length == SOCKET_ERROR)
    {
        Sockerror(ERROR_RECEIVE);
        //return(SOCK_NG);
    }
    r_buf[length] = 0;
    strcpy(r_buf_static, r_buf);

    //报警确认
    if (global_opr_wr_rd == ALARM_LIST_1)
    {
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00004801");
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    if (global_opr_wr_rd == ALARM_LIST_1)
    {
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        Sleep(1000);
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00004800");
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    //初始位置输入
    if (global_opr_wr_rd == MAIN_JOG_MODE)
    {	//多输入一次以防输入未响应
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00001201M*00007000");
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000020000A14010000D*003030000200000000");
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000020000A14010000D*003032000200000000");
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000020000A14010000D*000160000200000000");
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    if (global_opr_wr_rd == RECIEPE_SAVE)
    {
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000068000A14010000D*0020200014");
        for (int j = 0; j <= 9; j++)
        {
            if (j == 0) { global_recipe_rot_spd[0][0] = '0'; }
            strcat(s_buf, global_recipe_rot_spd[j]);
        }
        for (int q = 122; q <= 299; q++)
        {
            if (q == 122) { s_buf[q] = 0; }
            else { s_buf[q] = -52; }
        }
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }

        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    if (global_opr_wr_rd == RECIEPE_SAVE)
    {
        //============================================================================================
        /*强制关闭ERROR LED
        strcpy(s_buf,"500000FF03FF00000C000A16170000");
        */
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        //Sleep(1000);
        strcpy(s_buf, "500000FF03FF000068000A14010000D*0020600014");
        for (int k = 0; k <= 9; k++)///////////////////////////////////////////
        {
            if (k == 0) { global_recipe_slv_pos[0][0] = global_slv_latch; }
            strcat(s_buf, global_recipe_slv_pos[k]);
        }
        for (int q = 122; q <= 299; q++)
        {
            if (q == 122) { s_buf[q] = 0; }
            else { s_buf[q] = -52; }
        }
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    if (global_opr_wr_rd == RECIEPE_SAVE)
    {
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000030000A14010000D*0020400006");
        for (int k = 0; k <= 2; k++)///////////////////////////////////////////
        {
            if (k == 0) {
                global_recipe_pin_pos[0][0] = global_pin_latch;
                strcat(s_buf, global_recipe_pin_pos[k]);
            }
            else if (k == 1) { strcat(s_buf, global_recipe_pin_pos[k]); }
            else if (k == 2) { strcat(s_buf, global_recipe_pin_pos[k]); }
        }
        for (int q = 66; q <= 299; q++)
        {
            if (q == 66) { s_buf[q] = 0; }
            else { s_buf[q] = -52; }
        }

        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    if (global_opr_wr_rd == RECIEPE_SAVE)
    {
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000038000A14010000D*0020460008");
        for (int k = 3; k <= 6; k++)///////////////////////////////////////////
        {
            if (k == 3) { strcat(s_buf, global_recipe_pin_pos[k]); }
            else if (k == 4) { strcat(s_buf, global_recipe_pin_pos[k]); }
            else if (k == 5) { strcat(s_buf, global_recipe_pin_pos[k]); }
            else if (k == 6) { strcat(s_buf, global_recipe_pin_pos[k]); }
        }
        //for(int q=122;q<=299;q++)
        for (int q = 74; q <= 299; q++)
        {
            if (q == 74) { s_buf[q] = 0; }
            else { s_buf[q] = -52; }
        }

        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
            //return(SOCK_NG);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    if (global_opr_wr_rd == RECIEPE_SAVE)
    {
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000030000A14010000D*0020540006");
        for (int k = 7; k <= 9; k++)///////////////////////////////////////////
        {
            if (k == 7) { strcat(s_buf, global_recipe_pin_pos[k]); }
            else if (k == 8) { strcat(s_buf, global_recipe_pin_pos[k]); }
            else if (k == 9) { strcat(s_buf, global_recipe_pin_pos[k]); }
        }
        for (int q = 66; q <= 299; q++)
        {
            if (q == 66) { s_buf[q] = 0; }
            else { s_buf[q] = -52; }
        }

        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    if (global_opr_wr_rd == JOG_AXIS_SET)
    {
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        if (global_jog_axis_status == 0)
        {
            //strcpy(s_buf,"500000FF03FF000019000A14010001M*00012700011");
            Sleep(3000);
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012700010");
            global_jog_axis_status = 1;
        }
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    //}
    if (global_opr_wr_rd == AUTO_CNT_ZERO)
    {
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        //strcpy(s_buf,"500000FF03FF000019000A14010001M*00012700011");
        Sleep(1000);
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00013900");
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//数据发送
        {
            Sockerror(ERROR_SEND);//发送出错处理
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    //写入完成判断
    global_opr_wr_rd = 0;
    global_opr_num_key = 0;
    //MessageBox(r_buf);
}
//字符数据转浮点数操作--写入
void CCASC_05Dlg::Char_To_Float()
{
    float f = 0.0F;
    char char_to_float[32];
    if (global_i_char_to_float == 0) { f = atof(test); }
    else
    {
        switch (global_i_char_to_float)
        {
        case 1: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 2: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 3: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 4: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 5: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 6: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 7: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 8: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 9: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 10: {f = global_edit_rot[global_i_char_to_float - 1]; break; }
        case 11: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 12: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 13: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 14: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 15: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 16: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 17: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 18: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 19: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 20: {f = global_edit_pin[global_i_char_to_float - 11]; break; }
        case 21: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 22: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 23: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 24: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 25: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 26: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 27: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 28: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 29: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 30: {f = global_edit_slv[global_i_char_to_float - 21]; break; }
        case 31: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        case 32: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        case 33: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        case 34: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        case 35: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        case 36: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        case 37: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        case 38: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        case 39: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        case 40: {f = global_edit_time[global_i_char_to_float - 31]; break; }
        }
    }

    int* pa = reinterpret_cast<int*>(&f);
    int m1 = 0, m2 = 0, m3 = 0, m4 = 0;

    for (int i = 0; i <= 31; i++)
    {
        char_to_float[31 - i] = ((*pa >> i & 1) + 48);
    }

    for (int j = 0, k = 0; j <= 31 && k <= 8; j = j + 4, k++)
    {
        m1 = (char_to_float[j] - 48) * 8;
        m2 = (char_to_float[j + 1] - 48) * 4;
        m3 = (char_to_float[j + 2] - 48) * 2;
        m4 = (char_to_float[j + 3] - 48);
        if (k <= 3)
        {
            m_char_to_float[k + 4] = (m1 + m2 + m3 + m4);
            if (m_char_to_float[k + 4] <= 9) { m_char_to_float[k + 4] = m_char_to_float[k + 4] + 48; }
            else { m_char_to_float[k + 4] = m_char_to_float[k + 4] - 10 + 65; }
        }
        else
        {
            m_char_to_float[k - 4] = (m1 + m2 + m3 + m4);
            if (m_char_to_float[k - 4] <= 9) { m_char_to_float[k - 4] = m_char_to_float[k - 4] + 48; }
            else { m_char_to_float[k - 4] = m_char_to_float[k - 4] - 10 + 65; }
        }
    }
    global_i_char_to_float = 0;
}
//浮点数转字符数据---读取
void CCASC_05Dlg::Float_To_Char()
{
    char num[32];
    read_convert = 0.0F;//初始化
    int mid_user = 0;
    int j = 0;
    int n = 0;
    int* pa = reinterpret_cast<int*>(&read_convert);
    //float slv_obj_num,pin_obj_num;
    for (int m = 0; m <= 7; m++)
    {
        if (r_buf_static[22 + m] >= 48 && r_buf_static[22 + m] <= 57) mid_user = r_buf_static[22 + m] - 48;
        else mid_user = r_buf_static[22 + m] - 65 + 10;//字符数据ASCII转换为整数

        if (m <= 3)
        {
            for (int k = 3; k >= 0; k--)//22
            {
                num[15 - k - j] = mid_user % 2 + 48;
                mid_user = mid_user / 2;
            }
            j = j + 4;
        }
        else
        {
            for (int k = 3; k >= 0; k--)//22
            {
                num[31 - k - n] = mid_user % 2 + 48;
                mid_user = mid_user / 2;
            }
            n = n + 4;
        }
    }
    for (int i = 0; i <= 31; i++)
    {
        *pa = (*pa) | ((num[i] - 48) << (i));
    }

}
//*********************************************************************************************
DWORD WINAPI RdMessageThread(LPVOID pParam)//读线程函数声明
{
    CCASC_05Dlg dlg;
    //CCasc_01_jog dlg_jog_01;
    while (thread_status)//等待消息到来
    {
        switch (global_mode)
        {
        case MAIN_JOG_MODE: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//进入进程等待
            //global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();

            break; }//进入手动模式读操作
        case JOG_MONITOR_AXIS: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//进入进程等待
            //global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//进入手动模式读操作
        case MAIN_AUTO_MODE: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//进入进程等待
            //global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//进入自动模式读操作
        case AUX_ALIGN_ENTER: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//进入进程等待
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//辅助自动对刀
        case AUX_CLEAR: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//进入进程等待
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//辅助清洗读操作
        case AUX_FUNC: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//进入进程等待
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }
        case AUX_HOME_START: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//进入进程等待
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }
        case ALARM_LIST: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//进入进程等待
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//辅助清洗读操作
        default:
            break;
        }
        //DispatchMessage(&msg);
        //TranslateMessage(&msg);
    }
    return 0UL;
}
DWORD WINAPI WrMessageThread(LPVOID pParam)//写线程函数声明
{
    MSG msg;
    CCASC_05Dlg dlg;
    while (GetMessage(&msg, NULL, 0U, 0U))//等待消息到来
    {
        switch (msg.message)
        {
        case WM_UM_JOG_MODE: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();//手动模式进入设置
            global_m_Event_Rd.SetEvent();
            break; }//进入手动模式读操作
        case WM_UM_JOG_MODE_END: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//退出手动模式读操作
        case WM_UM_JOG_ROT_START: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——旋转启动
        case WM_UM_JOG_ROT_START_2: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——反转启动
        case WM_UM_JOG_ROT_SPD_SET: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——旋转速度设定
        case WM_UM_JOG_SLV_POS_SET: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——套目标位置设定
        case WM_UM_JOG_PIN_POS_SET: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——针目标位置设定
        case WM_UM_JOG_PIN_SLV_UD_SET: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌针套进给量设计
        case WM_UM_JOG_BTN_SLV_UP: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌套按钮上
        case WM_UM_JOG_BTN_SLV_UP_STOP: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌套按钮上停止
        case WM_UM_JOG_BTN_SLV_DN: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌套按钮下
        case WM_UM_JOG_BTN_SLV_DN_STOP: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌套按钮下停止
        case WM_UM_JOG_BTN_PIN_UP: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌针按钮上
        case WM_UM_JOG_BTN_PIN_UP_STOP: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌针按钮上停止
        case WM_UM_JOG_BTN_PIN_DN: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌针按钮下
        case WM_UM_JOG_BTN_PIN_DN_STOP: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌针按钮下停止
        case WM_UM_JOG_SLV_LINK: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——搅拌套连动
        case WM_UM_JOG_ROT_LINK: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动——主轴连动
        case WM_UM_JOG_BRK_OPEN: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动监视——制动刹车
        case WM_UM_JOG_COL_OPEN: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动监视——冷却气
        case WM_UM_JOG_GAS_OPEN: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//手动监视——液压缸

        case WM_UM_AUTO_MODE: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//进入自动模式操作
        case WM_UM_AUTO_MODE_END: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//退出自动模式操作
        case WM_UM_AUTO_DR_OPEN: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//自动——初始旋转开
        case WM_UM_AUTO_DR_CLOSE: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//自动——初始旋转关
        case WM_UM_AUTO_CANCLE: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//自动——取消
        case WM_UM_CNT_ZERO: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }
        case WM_UM_RECIEPE_SAVE1: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//配方——激活
        case WM_UM_RECIEPE_SAVE2: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//配方——激活
        case WM_UM_RECIEPE_SAVE3: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//配方——激活
        case WM_UM_RECIEPE_SAVE4: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//配方——激活
        case WM_UM_AUX_CONST_ROT: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——恒热旋转
        case WM_UM_AUX_CLEAR1: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——辅助清洗
        case WM_UM_AUX_CLEAR2: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——辅助清洗
        case WM_UM_AUX_FINI: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——辅助清洗
        case WM_UM_AUX_ALIGN_START: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——对刀开始
        case WM_UM_AUX_ALIGN_CONFIRM: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——对刀确认
        case WM_UM_AUX_ALIGN_BACK: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——对刀返回
        case WM_UM_AUX_ALIGN_ENTER: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——对刀返回
        case WM_UM_JOG_AXIS_SET: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——坐标设定
        case WM_UM_AUX_HOME_START: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——回原点开始
        case WM_UM_AUX_HOME_GAS: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——回原点气阀打开
        case WM_UM_AUX_HOME_PIN: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——pin回原点
        case WM_UM_AUX_HOME_SLV: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——slv回原点
        case WM_UM_AUX_HOME_BACK: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//辅助功能——返回
        case WM_UM_ALARM_OK: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//报警确认
        case WM_UM_ALARM_LED: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//报警灯闪烁
        case WM_UM_ALARM_LED_S: {
            global_m_Event_Rd.ResetEvent();//关闭读线程
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//报警灯闪烁
        default:
            break;
        }
        //WaitForSingleObject(global_m_Event_Wr.m_hObject, INFINITE);
        DispatchMessage(&msg);
        TranslateMessage(&msg);
    }
    return 0UL;
}

void CCASC_05Dlg::OnCascRobot()
{
    // TODO: Add your control notification handler code here
    CCasc_101_robot robot_101_window;
    //---------------------------------
    robot_101_window.DoModal();
}

void CCASC_05Dlg::OnCascConstRot()
{
    // TODO: Add your control notification handler code here
    global_opr_wr_rd = AUX_CONST_ROT;
    if (global_aux_hot_status == 0)
    {
        global_aux_hot_status = 1;//打开恒热旋转
        PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_CONST_ROT, NULL, NULL);
        //dlg.Msg_WR();
    }
    else
    {
        global_aux_hot_status = 0;//关闭恒热旋转
        PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_CONST_ROT, NULL, NULL);//(LPARAM)p);
    }
}

void CCASC_05Dlg::OnAlarm1()
{
    // TODO: Add your control notification handler code here
    CCasc_200_alarm auto_200_alarm1;
    global_mode = ALARM_LIST;
    auto_200_alarm1.DoModal();
}

void CCASC_05Dlg::Char_To_Int()
{

}
