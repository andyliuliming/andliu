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
//д�������״̬--------------------------------��PLC��д��״̬
extern int global_opr_wr_rd;
CEvent global_m_Event_Rd(FALSE, TRUE);
CEvent global_m_Event_Wr(FALSE, FALSE);
extern DWORD m_dwThreadId_Wr;
extern HANDLE m_hThread_Wr;
extern DWORD m_dwThreadId_Rd;
extern HANDLE m_hThread_Rd;
//��Ϣ�̺߳�������
DWORD WINAPI RdMessageThread(LPVOID pParam);//���̺߳�������
DWORD WINAPI WrMessageThread(LPVOID pParam);//д�̺߳�������

extern float global_rot_spd_disp;//��ת�ٶ���ʾ
extern float global_torque_disp;//ת��ʵʱ��ʾ
extern bool global_write_file_flag;//��¼torque��ʶ
extern WriteQueue global_queue;
extern WriteHandler global_handler;
extern float global_pin_limit_dn;//pin����λ
extern float global_pin_limit_up;//pin����λ
extern float global_slv_limit_dn;//slv����λ
extern float global_slv_limit_up;//slv����λ
extern int   global_up_dn_lim_status;//pin&slv������λ
extern float global_slv_pos_disp;//slvʵʱλ����ʾ
extern float global_pin_pos_disp;//pinʵʱλ����ʾ
extern float global_slv_spd_disp;//slvʵʱ�ٶ���ʾ
extern float global_pin_spd_disp;//pinʵʱ�ٶ���ʾ
extern int   global_slv_up_status;//slv�ϰ�ť״̬
extern int   global_slv_dn_status;//slv�°�ť״̬
extern int   global_pin_up_status;//pin�ϰ�ť״̬
extern int   global_pin_dn_status;//pin�°�ť״̬
extern int   global_pin_slv_btn_st;//pin&slv��ť״̬

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
extern int   global_exe_sen_status;//�Զ���
extern int   global_paint;
extern int   global_home_pin;
extern int   global_home_slv;
extern bool  global_alarm_status;
extern char  r_buf_alarm_m[6];
//��ҳ
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
            DEFAULT_PITCH | FF_SWISS, "���Ŀ���");
    if (pFont_aux_title != NULL)
        pFont_aux_title->CreateFont(
            25, 0, 0, 0, FW_NORMAL, FALSE,
            FALSE, 0, DEFAULT_CHARSET, OUT_DEFAULT_PRECIS,
            CLIP_DEFAULT_PRECIS, DEFAULT_QUALITY,
            DEFAULT_PITCH | FF_SWISS, "���Ŀ���");
    //���ÿؼ�����
    GetDlgItem(IDC_MAIN_TITLE)->SetFont(pFont_main_title);
    GetDlgItem(IDC_AUX_TITLE)->SetFont(pFont_aux_title);
    //}

    //����ͨѶ================================================================
    m_client = socket(AF_INET, SOCK_STREAM, 0);
    WSADATA wsd;
    WSAStartup(MAKEWORD(2, 2), &wsd);
    //�������˵�ַ
    sockaddr_in serveraddr;

    UpdateData(TRUE);
    serveraddr.sin_family = AF_INET;
    serveraddr.sin_port = htons(0x2000);//m_port);
    serveraddr.sin_addr.S_un.S_addr = inet_addr("192.168.1.1");//(m_IP);
    //serveraddr.sin_port = htons(m_port);
    //serveraddr.sin_addr.S_un.S_addr = inet_addr(m_IP);

    //���׽���
    bind(m_client, (sockaddr*)&serveraddr, sizeof(serveraddr));

    //���ӷ�����
    if (connect(m_client, (sockaddr*)&serveraddr, sizeof(serveraddr)) != 0)
    {
        MessageBox("����ʧ��");
    }
    else
    {
        m_client_static = m_client;
        //MessageBox("���ӳɹ�");
    }
    //����ͨѶ================================================================
    //�߳�====================================================================
    m_hThread_Rd = CreateThread(NULL, 0UL, RdMessageThread, NULL, CREATE_SUSPENDED, &m_dwThreadId_Rd);//���̴߳���
    m_hThread_Wr = CreateThread(NULL, 0UL, WrMessageThread, NULL, CREATE_SUSPENDED, &m_dwThreadId_Wr);//д�̴߳���
    if (m_hThread_Rd == INVALID_HANDLE_VALUE)//�������̲߳��ɹ�
    {
        AfxMessageBox("�������߳�ʧ��!");
        return TRUE;
    }
    if (m_hThread_Wr == INVALID_HANDLE_VALUE)//����д�̲߳��ɹ�
    {
        AfxMessageBox("����д�߳�ʧ��!");
        return TRUE;
    }
    ResumeThread(m_hThread_Rd);//�������߳�
    ResumeThread(m_hThread_Wr);//����д�߳�
    thread_status = 1;
    //�߳�====================================================================
    //������ʼ��
    global_up_dn_lim_status = 0;
    global_mode = ALARM_LIST;
    global_alarm_status = FALSE;
    global_m_Event_Rd.SetEvent();
    global_windows_num = 0;//��ҳ
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
    //��������λ-----------------------
    global_opr_wr_rd = MAIN_AUTO_MODE;
    PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUTO_MODE, NULL, NULL);//(LPARAM)p);
    global_mode = MAIN_AUTO_MODE;
    global_up_dn_lim_status = 0;
    global_exe_sen_status = 0;
    global_windows_num = 2;//�Զ�
    auto_02_window.DoModal();
}

void CCASC_05Dlg::OnCascJog()
{

    CCasc_01_jog jog_01_window;
    //��������λ-----------------------
    global_up_dn_lim_status = 0;
    global_mode = MAIN_JOG_MODE;
    global_opr_wr_rd = MAIN_JOG_MODE;

    PostThreadMessage(m_dwThreadId_Wr, WM_UM_JOG_MODE, NULL, NULL);//(LPARAM)p);

    global_windows_num = 1;//�ֶ�
    jog_01_window.DoModal();
}

void CCASC_05Dlg::OnCascRecipe()
{

    CCasc_03_recipe recipe_03_window;
    //��������λ-----------------------

    //---------------------------------
    global_windows_num = 3;//�䷽����
    recipe_03_window.DoModal();
}

void CCASC_05Dlg::OnCascSys()
{

    CCasc_04_sys sys_04_window;
    global_windows_num = 4;//�ֶ�
    sys_04_window.DoModal();
}

void CCASC_05Dlg::OnFull()
{

    int window_cx = ::GetSystemMetrics(SM_CXSCREEN);//��Ļ��С��ȡcx
    int window_cy = ::GetSystemMetrics(SM_CYSCREEN);//��Ļ��С��ȡcy

    CRect rtClient;
    CRect rtBtn_Jog, rtBtn_Auto, rtBtn_Recipe, rtBtn_Sys;
    CWnd *pWnd_Jog = GetDlgItem(IDC_CASC_JOG);//�ֶ���ť
    CWnd *pWnd_Auto = GetDlgItem(IDC_CASC_AUTO);//�Զ���ť
    CWnd *pWnd_Recipe = GetDlgItem(IDC_CASC_RECIPE);//�䷽��ť
    CWnd *pWnd_Sys = GetDlgItem(IDC_CASC_SYS);//ϵͳ��ť

    GetClientRect(&rtClient);             //��öԻ���ͻ�����Ļ����   
    ClientToScreen(&rtClient);            //ӳ��Ϊ��Ļ����

    //���button��Ļ����
    pWnd_Jog->GetWindowRect(&rtBtn_Jog);
    pWnd_Auto->GetWindowRect(&rtBtn_Auto);
    pWnd_Recipe->GetWindowRect(&rtBtn_Recipe);
    pWnd_Sys->GetWindowRect(&rtBtn_Sys);

    //��ȡ��button�ĳߴ�
    int bx_jog = rtBtn_Jog.Width();//�ֶ�
    int by_jog = rtBtn_Jog.Height();//�ֶ�
    int bx_Auto = rtBtn_Auto.Width();//�Զ�
    int by_Auto = rtBtn_Auto.Height();//�Զ�
    int bx_Recipe = rtBtn_Recipe.Width();//�䷽
    int by_Recipe = rtBtn_Recipe.Height();//�䷽
    int bx_Sys = rtBtn_Sys.Width();//ϵͳ
    int by_Sys = rtBtn_Sys.Height();//ϵͳ

    //���ȫ�����������ڱ߿�ľ�������
    //int dx_jog=rtClient.right-rtBtn_Jog.right;//�ֶ���
    int dx_jog = rtBtn_Jog.left - rtClient.left;//�ֶ���
    int dy_jog = rtClient.bottom - rtBtn_Jog.bottom;//�ֶ���
    int dx_Auto = rtBtn_Auto.left - rtClient.left;//�Զ���
    int dy_Auto = rtClient.bottom - rtBtn_Auto.bottom;//�Զ���
    int dx_Recipe = rtBtn_Recipe.left - rtClient.left;//�䷽��
    int dy_Recipe = rtClient.bottom - rtBtn_Recipe.bottom;//�䷽��
    int dx_Sys = rtClient.right - rtBtn_Sys.right;//ϵͳ��
    int dy_Sys = rtClient.bottom - rtBtn_Sys.bottom;//ϵͳ��

    //�������
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
    global_windows_num = 6;//��������
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
//����ͨѶ�������
void CCASC_05Dlg::Sockerror(int error_kind)
{
    if (error_kind == ERROR_INITIAL)
    {
        MessageBox("��ʼ�������쳣");
    }
    else
    {
        nErrorStatus = WSAGetLastError();
        switch (error_kind)
        {
        case ERROR_SOCKET:
            MessageBox("�׽��ִ����쳣");
            break;
        case ERROR_BIND:
            MessageBox("�׽��ְ��쳣");
            break;
        case ERROR_CONNECT:
            MessageBox("�׽��������쳣");
            break;
        case ERROR_SEND:
            MessageBox("�����쳣");
            break;
        case ERROR_RECEIVE:
            MessageBox("�����쳣");
            break;
        case ERROR_SHUTDOWN:
            MessageBox("�ػ��쳣");
            break;
        case ERROR_CLOSE:
            MessageBox("��·�ر��쳣");
            break;
        }
    }
}
//����ͨѶ������ȡ����
void CCASC_05Dlg::Msg_RD()
{
    int length = 0;
    int k = 0;
    m_client = (SOCKET)m_client_static;
    //****************************************************************************************
    //************��ҳ�뱨��ҳ****************************************************************
    //****************************************************************************************
    //�������================================================================================
    if (global_mode == ALARM_LIST)
    {
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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

            //��������
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
                //��������˸
                //if(global_alarm_status==FALSE)
                //{
                global_opr_wr_rd = ALARM_LED;
                PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                global_alarm_status = TRUE;
                //}
            }
            //�����ƹ�
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
        //����M��������-----------------------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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


            //��������
            if (strcmp(r_buf_static, alarm_safe_m) != 0)
            {
                CCasc_200_alarm alarm;
                global_alarm_status = FALSE;
                //��������˸
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
            //�����ƹ�
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
    if (global_mode == MAIN_JOG_MODE)//�ֶ�ģʽ��ҳ
    {
        //�ֶ�ģʽ������ҳ----------------------------------------------------------------
        //strcpy(s_buf,"500000FF03FF000018000A04010000D*0030300002");
        //===============================================================
        //�ֶ���������
        if (k >= 4)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
                //��������
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
                    //��������˸
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //�����ƹ�
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
            //����M��������-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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

                //��������
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //��������˸
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
                //�����ƹ�
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
            //���¼���λ����ʾ
            //if(global_up_dn_lim_status==0)
            //{
                //pin����λ------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0003000002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin����λ------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0003020002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv����λ------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0003040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv����λ------------------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0003060002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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

    //��ת�ٶ���ʾ		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
    if (global_mode == MAIN_AUTO_MODE)//�Զ�ģʽ��ҳ
    {
        //�Զ�ģʽ������ҳ----------------------------------------------------------------
        //===============================================================
        //�Զ���������
        if (k >= 2)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
                //��������
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
                    //��������˸
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //�����ƹ�
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
            //����M��������-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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

                //��������
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //��������˸
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
                //�����ƹ�
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
        //��ת�ٶ���ʾ		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //torqueת��ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
                global_queue.EnQueue(global_torque_disp);//��ʼ��¼�ļ�
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
        //slv��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //���ӵ������
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0020880002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //���¼���λ����ʾ
        if (global_up_dn_lim_status == 0)
        {
            //pin����λ------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003000002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //pin����λ------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003020002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //slv����λ------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003040002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //slv����λ------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003060002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
        //��������ִ�л���
        if (global_exe_sen_status == 0)
        {

            //C�ͼܴ��ڹ���λ��
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0001230001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //C�ͼܴ��ڵ���β��
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0001240001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //��·ѹ��������
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0001000001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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

            //�ƶ�װ�ÿ�
            strcpy(s_buf, "500000FF03FF000018000A04010001Y*0000350001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //��ȴ���忪
            strcpy(s_buf, "500000FF03FF000018000A04010001Y*0000340001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //Һѹ�׿�
            strcpy(s_buf, "500000FF03FF000018000A04010001Y*0000330001");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
        //�ֶ����ӱ�������
        if (k >= 2)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
                //��������
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
                    //��������˸
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //�����ƹ�
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
            //����M��������-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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

                //��������
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //��������˸
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
                //�����ƹ�
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
        //�ֶ���������������趨----------------------------------------------------------------
        if (global_up_dn_lim_status == 0)
        {
            //pin����λ------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003000002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //pin����λ------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003020002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //slv����λ------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003040002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
            //slv����λ------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0003060002");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv�����趨ֵ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0020820002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin�����趨ֵ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0020800002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //C�ͼܴ��ڹ���λ��
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001230001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //C�ͼܴ��ڵ���β��
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001240001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //��·ѹ��������
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001000001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //����������λ������
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001260001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //����������λ������
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001250001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //�ƶ�װ�ÿ�
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001220001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //��ȴ���忪
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001210001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //Һѹ�׿�
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0001200001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
    if (global_mode == AUX_ALIGN_ENTER)//�����Զ��Ե�
    {
        //��ת�ٶ���ʾ		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0004260002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0004220002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv�Ե���ʼ
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0000600001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv�Ե����
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0000930001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin�Ե���ʼ
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0000500001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin�Ե����
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0000920001");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
    if (global_mode == AUX_CLEAR)//������ϴ
    {
        //������ϴ��������
        if (k >= 2)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
                //��������
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
                    //��������˸
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //�����ƹ�
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
            //����M��������-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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

                //��������
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //��������˸
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
                //�����ƹ�
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
        //��ת�ٶ���ʾ		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
    if (global_mode == AUX_FUNC)//����������ʾ
    {
        //������������
        if (k >= 2)
        {
            strcpy(s_buf, "500000FF03FF000018000A04010000D*0035000009");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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
                //��������
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
                    //��������˸
                    //if(global_alarm_status==FALSE)
                    //{
                    global_opr_wr_rd = ALARM_LED;
                    PostThreadMessage(m_dwThreadId_Wr, WM_UM_ALARM_LED, NULL, NULL);
                    global_alarm_status = TRUE;
                    //}
                }
                //�����ƹ�
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
            //����M��������-----------------------------------------------------------------
            strcpy(s_buf, "500000FF03FF000018000A04010001M*0005500007");
            length = strlen(s_buf);
            if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
            {
                Sockerror(ERROR_SEND);//���ͳ�����
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

                //��������
                if (strcmp(r_buf_static, alarm_safe_m) != 0)
                {
                    CCasc_200_alarm alarm;
                    global_alarm_status = FALSE;
                    //��������˸
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
                //�����ƹ�
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
        //��ת�ٶ���ʾ		
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001620002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //slv��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0002040002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        //pin��̬����ֵ��ʾ
        strcpy(s_buf, "500000FF03FF000018000A04010000D*0001840002");
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
    if (global_mode == AUX_HOME_START)//��ԭ��״̬���
    {
        //----------------------------------------
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0002380001");//�������ԭ��
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        strcpy(s_buf, "500000FF03FF000018000A04010001M*0002580001");//�����׻�ԭ��
        length = strlen(s_buf);
        if (send(m_client, s_buf, length, 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
            global_home_slv = r_buf[22] - 48;//��ԭ���ź���ɷ���
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
//����ͨѶ����д������
void CCASC_05Dlg::Msg_WR()
{
    int length;
    m_client = (SOCKET)m_client_static;


    switch (global_opr_num_key)
    {
        //�ֶ�ģʽ
    case JOG_ROT_SPD_SET: {
        strcpy(s_buf, "500000FF03FF000020000A14010000D*0001600002");
        strcat(s_buf, m_char_to_float);
        break; }//������תĿ���ٶ�
    case JOG_SLV_POS_SET: {
        strcpy(s_buf, "500000FF03FF000020000A14010000D*0030320002");
        strcat(s_buf, m_char_to_float);
        break; }//��Ŀ��λ��
    case JOG_PIN_POS_SET: {
        strcpy(s_buf, "500000FF03FF000020000A14010000D*0030300002");
        strcat(s_buf, m_char_to_float);
        break; }//��Ŀ��λ��
    case JOG_PIN_SLV_UD_SET: {
        strcpy(s_buf, "500000FF03FF000020000A14010000D*0001640002");
        strcat(s_buf, m_char_to_float);
        break; }//�������׽��������
    }

    switch (global_opr_wr_rd)
    {
        //�ֶ�ģʽ
    case MAIN_JOG_MODE: {
        //strcpy(s_buf,"500000FF03FF000019000A14010001M*00001200011");
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00001201M*00007000");
        break; }//�ֶ����������ֶ�׼��
    case JOG_BACK_MAIN: {
        //strcpy(s_buf,"500000FF03FF000019000A14010001M*00001200010");
        strcpy(s_buf, "500000FF03FF00005E000A1402000108M*00000000M*00001200M*00001000M*00001100M*00012000M*00012100M*00012200M*00012700");
        break; }//�ֶ������˳��ֶ�ģʽ
    //�ֶ�ģʽ������ҳ
    case JOG_ROT_START: {
        if (global_jog_rot_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000000011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000000010");
        break; }//�ֶ�����������ת����
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
        break; }//�ֶ������װ�ť���˶�
    case JOG_SLV_DN: {
        if (global_slv_dn_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000400011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000400010");
        //global_m_Event_Wr.ResetEvent();
        break; }//�ֶ������װ�ť���˶�
    case JOG_PIN_UP: {
        if (global_pin_up_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000100011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000100010");
        //global_m_Event_Wr.ResetEvent();
        break; }//�ֶ������밴ť���˶�
    case JOG_PIN_DN: {
        if (global_pin_dn_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000200011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00000200010");
        //global_m_Event_Wr.ResetEvent();
        break; }//�ֶ������밴ť���˶�
    //�ֶ�ģʽ��������
    case JOG_BRK_OPEN: {
        if (global_jog_brk_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012200011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012200010");
        break; }//�ֶ������ƶ�ɲ����
    case JOG_COL_OPEN: {
        if (global_jog_col_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012100011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012100010");
        break; }//�ֶ�������ȴ����
    case JOG_GAS_OPEN: {
        if (global_jog_gas_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012000011");
        else strcpy(s_buf, "500000FF03FF000019000A14010001M*00012000010");
        break; }//�ֶ�������Һ�״�
    case JOG_CNT_CLEAR: {
        break; }//�ֶ���������������
    case JOG_SLV_LINK: {
        if (global_jog_slv_link == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001100011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001100010");
        break; }//�ֶ���������������
    case JOG_ROT_LINK: {
        if (global_jog_rot_link == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001000011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001000010");
        break; }//�ֶ���������������
    //�Զ�ģʽ
    case MAIN_AUTO_MODE: {
        strcpy(s_buf, "500000FF03FF000019000A14010001M*00001400011");
        break; }//�Զ����������Զ�׼��
    case AUTO_BACK_MAIN: {
        strcpy(s_buf, "500000FF03FF00004A000A1402000106M*00001400M*00008001M*00013500M*00013000M*00001900M*00007001");
        break; }//�Զ������˳��Զ�׼��
    case AUTO_DR_OPEN: {
        strcpy(s_buf, "500000FF03FF00002C000A1402000103M*00001901M*00008000M*00007000");
        break; }//�Զ�������ʼ��ת��
    case AUTO_DR_CLOSE: {
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00008001M*00001900");
        break; }//�Զ�������ʼ��ת��
    case AUTO_CANCLE: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00015201");
        break; }//�Զ������ӹ�ȡ��
    case AUTO_CNT_ZERO: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00013901");
        break; }//�Զ������ӹ�ȡ��
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
        break; }//�䷽��������

    case AUX_CONST_ROT: {
        if (global_aux_hot_status == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00007000011");
        else
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00007000010");
        break; }//�������ܡ���������ת
    case AUX_CLEAR1: {
        strcpy(s_buf, "500000FF03FF00002C000A1402000103M*00007000M*00007101M*00007200");
        break; }//�������ܡ���������ϴ1
    case AUX_CLEAR2: {
        strcpy(s_buf, "500000FF03FF00002C000A1402000103M*00007000M*00007100M*00007201");
        break; }//�������ܡ���������ϴ2
    case AUX_FINI: {
        strcpy(s_buf, "500000FF03FF00002C000A1402000103M*00007000M*00007100M*00007200");
        break; }//�������ܡ���������ϴ���
    case AUX_ALIGN_START: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00009101");
        break; }//�������ܡ����Ե���ʼ
    case AUX_ALIGN_CONFIRM: {
        strcpy(s_buf, "500000FF03FF00005E000A1402000108M*00009000M*00009100M*00039900M*00002200M*00009200M*00009300M*00002300M*00001201");
        break; }//�������ܡ����Ե�ȷ��
    case AUX_ALIGN_BACK: {
        strcpy(s_buf, "500000FF03FF000054000A1402000107M*00009000M*00009100M*00039900M*00002200M*00009200M*00009300M*00002300");
        break; }//�������ܡ����Ե�����
    case AUX_ALIGN_ENTER: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00009001");
        break; }//�������ܡ����Ե�����
    case AUX_HOME_START: {
        if (global_home_start == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00001300011");
        else strcpy(s_buf, "500000FF03FF000019000A14010001M*00001300010");
        break; }//�������ܡ�����ԭ�㿪ʼ
    case AUX_GAS_OPEN: {
        if (global_home_gas == 1)
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012800011");
        else strcpy(s_buf, "500000FF03FF000019000A14010001M*00012800010");
        break; }//�������ܡ�����ԭ��������
    case AUX_HOME_PIN: {
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00001501M*00001600");
        break; }//�������ܡ���pin��ԭ��
    case AUX_HOME_SLV: {
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00001500M*00001601");
        break; }//�������ܡ���slv��ԭ��
    case AUX_HOME_BACK: {
        strcpy(s_buf, "500000FF03FF000036000A1402000104M*00001300M*00012800M*00001500M*00001600");
        break; }//�������ܡ�����ԭ�㷵��
    case JOG_AXIS_SET: {
        if (global_jog_axis_status == 0)
        {
            //wen33 add, need to delete

            //wen33 add, need to delete
            strcpy(s_buf, "500000FF03FF000019000A14010001M*00012700011");
        }
        break; }//�������ܡ��������趨

    case ALARM_LED: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00051301");
        break;//�����ƿ�
    }
    case ALARM_LED_S: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00051300");
        break;//�����ƹ�
    }
    case ALARM_LIST_1: {
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00004801");
        break;//����ȷ��
    }
    }
    //while(r_buf_static[18]==0&&r_buf_static[19]==0&&r_buf_static[20]==0&&r_buf_static[21]==0){}
    if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
    {
        Sockerror(ERROR_SEND);//���ͳ�����
    }
    length = recv(m_client, r_buf, BUF_SIZE, 0);
    if (length == SOCKET_ERROR)
    {
        Sockerror(ERROR_RECEIVE);
        //return(SOCK_NG);
    }
    r_buf[length] = 0;
    strcpy(r_buf_static, r_buf);

    //����ȷ��
    if (global_opr_wr_rd == ALARM_LIST_1)
    {
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000018000A1402000101M*00004801");
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    //��ʼλ������
    if (global_opr_wr_rd == MAIN_JOG_MODE)
    {	//������һ���Է�����δ��Ӧ
        while (r_buf_static[18] == 0 && r_buf_static[19] == 0 && r_buf_static[20] == 0 && r_buf_static[21] == 0) {}
        strcpy(s_buf, "500000FF03FF000022000A1402000102M*00001201M*00007000");
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        /*ǿ�ƹر�ERROR LED
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
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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

        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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

        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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

        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
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
        if (send(m_client, s_buf, strlen(s_buf), 0) == SOCKET_ERROR)//���ݷ���
        {
            Sockerror(ERROR_SEND);//���ͳ�����
        }
        length = recv(m_client, r_buf, BUF_SIZE, 0);
        if (length == SOCKET_ERROR)
        {
            Sockerror(ERROR_RECEIVE);
        }
        r_buf[length] = 0;
        strcpy(r_buf_static, r_buf);
    }
    //д������ж�
    global_opr_wr_rd = 0;
    global_opr_num_key = 0;
    //MessageBox(r_buf);
}
//�ַ�����ת����������--д��
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
//������ת�ַ�����---��ȡ
void CCASC_05Dlg::Float_To_Char()
{
    char num[32];
    read_convert = 0.0F;//��ʼ��
    int mid_user = 0;
    int j = 0;
    int n = 0;
    int* pa = reinterpret_cast<int*>(&read_convert);
    //float slv_obj_num,pin_obj_num;
    for (int m = 0; m <= 7; m++)
    {
        if (r_buf_static[22 + m] >= 48 && r_buf_static[22 + m] <= 57) mid_user = r_buf_static[22 + m] - 48;
        else mid_user = r_buf_static[22 + m] - 65 + 10;//�ַ�����ASCIIת��Ϊ����

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
DWORD WINAPI RdMessageThread(LPVOID pParam)//���̺߳�������
{
    CCASC_05Dlg dlg;
    //CCasc_01_jog dlg_jog_01;
    while (thread_status)//�ȴ���Ϣ����
    {
        switch (global_mode)
        {
        case MAIN_JOG_MODE: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//������̵ȴ�
            //global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();

            break; }//�����ֶ�ģʽ������
        case JOG_MONITOR_AXIS: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//������̵ȴ�
            //global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//�����ֶ�ģʽ������
        case MAIN_AUTO_MODE: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//������̵ȴ�
            //global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//�����Զ�ģʽ������
        case AUX_ALIGN_ENTER: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//������̵ȴ�
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//�����Զ��Ե�
        case AUX_CLEAR: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//������̵ȴ�
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//������ϴ������
        case AUX_FUNC: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//������̵ȴ�
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }
        case AUX_HOME_START: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//������̵ȴ�
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }
        case ALARM_LIST: {
            WaitForSingleObject(global_m_Event_Rd.m_hObject, INFINITE);//������̵ȴ�
            global_m_Event_Wr.ResetEvent();
            dlg.Msg_RD();
            break; }//������ϴ������
        default:
            break;
        }
        //DispatchMessage(&msg);
        //TranslateMessage(&msg);
    }
    return 0UL;
}
DWORD WINAPI WrMessageThread(LPVOID pParam)//д�̺߳�������
{
    MSG msg;
    CCASC_05Dlg dlg;
    while (GetMessage(&msg, NULL, 0U, 0U))//�ȴ���Ϣ����
    {
        switch (msg.message)
        {
        case WM_UM_JOG_MODE: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();//�ֶ�ģʽ��������
            global_m_Event_Rd.SetEvent();
            break; }//�����ֶ�ģʽ������
        case WM_UM_JOG_MODE_END: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�˳��ֶ�ģʽ������
        case WM_UM_JOG_ROT_START: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ�������ת����
        case WM_UM_JOG_ROT_START_2: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ�������ת����
        case WM_UM_JOG_ROT_SPD_SET: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ�������ת�ٶ��趨
        case WM_UM_JOG_SLV_POS_SET: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ�������Ŀ��λ���趨
        case WM_UM_JOG_PIN_POS_SET: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ�������Ŀ��λ���趨
        case WM_UM_JOG_PIN_SLV_UD_SET: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ������������׽��������
        case WM_UM_JOG_BTN_SLV_UP: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����������װ�ť��
        case WM_UM_JOG_BTN_SLV_UP_STOP: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����������װ�ť��ֹͣ
        case WM_UM_JOG_BTN_SLV_DN: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����������װ�ť��
        case WM_UM_JOG_BTN_SLV_DN_STOP: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����������װ�ť��ֹͣ
        case WM_UM_JOG_BTN_PIN_UP: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����������밴ť��
        case WM_UM_JOG_BTN_PIN_UP_STOP: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����������밴ť��ֹͣ
        case WM_UM_JOG_BTN_PIN_DN: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����������밴ť��
        case WM_UM_JOG_BTN_PIN_DN_STOP: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����������밴ť��ֹͣ
        case WM_UM_JOG_SLV_LINK: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ���������������
        case WM_UM_JOG_ROT_LINK: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ�������������
        case WM_UM_JOG_BRK_OPEN: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����ӡ����ƶ�ɲ��
        case WM_UM_JOG_COL_OPEN: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����ӡ�����ȴ��
        case WM_UM_JOG_GAS_OPEN: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�ֶ����ӡ���Һѹ��

        case WM_UM_AUTO_MODE: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�����Զ�ģʽ����
        case WM_UM_AUTO_MODE_END: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�˳��Զ�ģʽ����
        case WM_UM_AUTO_DR_OPEN: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�Զ�������ʼ��ת��
        case WM_UM_AUTO_DR_CLOSE: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�Զ�������ʼ��ת��
        case WM_UM_AUTO_CANCLE: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�Զ�����ȡ��
        case WM_UM_CNT_ZERO: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }
        case WM_UM_RECIEPE_SAVE1: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�䷽��������
        case WM_UM_RECIEPE_SAVE2: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�䷽��������
        case WM_UM_RECIEPE_SAVE3: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�䷽��������
        case WM_UM_RECIEPE_SAVE4: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�䷽��������
        case WM_UM_AUX_CONST_ROT: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ���������ת
        case WM_UM_AUX_CLEAR1: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ���������ϴ
        case WM_UM_AUX_CLEAR2: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ���������ϴ
        case WM_UM_AUX_FINI: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ���������ϴ
        case WM_UM_AUX_ALIGN_START: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ����Ե���ʼ
        case WM_UM_AUX_ALIGN_CONFIRM: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ����Ե�ȷ��
        case WM_UM_AUX_ALIGN_BACK: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ����Ե�����
        case WM_UM_AUX_ALIGN_ENTER: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ����Ե�����
        case WM_UM_JOG_AXIS_SET: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ��������趨
        case WM_UM_AUX_HOME_START: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ�����ԭ�㿪ʼ
        case WM_UM_AUX_HOME_GAS: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ�����ԭ��������
        case WM_UM_AUX_HOME_PIN: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ���pin��ԭ��
        case WM_UM_AUX_HOME_SLV: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ���slv��ԭ��
        case WM_UM_AUX_HOME_BACK: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//�������ܡ�������
        case WM_UM_ALARM_OK: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//����ȷ��
        case WM_UM_ALARM_LED: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//��������˸
        case WM_UM_ALARM_LED_S: {
            global_m_Event_Rd.ResetEvent();//�رն��߳�
            dlg.Msg_WR();
            global_m_Event_Rd.SetEvent();
            break; }//��������˸
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
        global_aux_hot_status = 1;//�򿪺�����ת
        PostThreadMessage(m_dwThreadId_Wr, WM_UM_AUX_CONST_ROT, NULL, NULL);
        //dlg.Msg_WR();
    }
    else
    {
        global_aux_hot_status = 0;//�رպ�����ת
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
