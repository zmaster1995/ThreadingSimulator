   M S B A M L   `   `   `  ���� M  IThreadingSimulator, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullG(clr-namespace:ThreadingSimulator.DialogsThreadingSimulator.Dialogs  O Kmscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e0891&clr-namespace:System;assembly=mscorlibSystem M+clr-namespace:ThreadingSimulator.ConvertersThreadingSimulator.Converters  8    2ThreadingSimulator.Dialogs.SimulationDisplayDialog   W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     @d2http://schemas.microsoft.com/expression/blend/2008     Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     :local(clr-namespace:ThreadingSimulator.Dialogs     6sys&clr-namespace:System;assembly=mscorlib     B
converters+clr-namespace:ThreadingSimulator.Converters     -     �Name$  
Simulation�� � WindowState$ 	Maximized=� � Title$ 
Simulation��$	��450��$	��800��
 � Tag ��True�� � 	Resources    Run �� 	UriSource  Previous  Next 	 Pause  Restart 
 Reload 
 Export9  3ThreadingSimulator.Converters.GetSuspendedConverter  GetSuspendedConverter��%}  &	        &	 (     &	 P     &	 y     &	 �     &	 �     &	 �     &	 (    �� $" ../Assets/icons8-play-64.png?��� $" ../Assets/icons8-left-64.png?��� $# ../Assets/icons8-right-64.png?��� $* $../Assets/icons8-pause-button-48.png?��� $% ../Assets/icons8-restart-48.png?��� $$ ../Assets/icons8-reload-64.png?��� $$ ../Assets/icons8-export-40.png?�  .��� $��10q� � RowDefinitions �� $��25 ��� $��2* ��� $��30 ��� $��* � � ColumnDefinitions �� $��3* ��� $��10 ��� $��* �.+���  �� Orientation$ 
Horizontal=�$��4��.+���   ButtonStyle#��[ ���� *StartAutoDisplayCmd+���� $ 
Horizontal=�.+��� #��[  $��16��$��16���� $��Auto run��$
��Bold"�$��5 0 0 0q��� $
��10 0q�#��[ ���� *PauseAutoDisplayCmd+���� $ 
Horizontal=�.+��� #��[ $��16��$��16���� $��Pause��$
��Bold"�$��5 0 0 0q��� #��[ ���� *PreviousLogCmd+���� $ 
Horizontal=�.+��� #��[ $��16��$��16���� $��Previous��$
��Bold"�$��5 0 0 0q��� $
��10 0q�#��[ ���� *
NextLogCmd+���� $ 
Horizontal=�.+��� #��[ $��16��$��16���� $
��Next��$
��Bold"�$��5 0 0 0q��� #��[ ���� *ResetSimulationCmd+���� $ 
Horizontal=�.+��� #��[ $��16��$��16���� $��Reset��$
��Bold"�$��5 0 0 0q��� #��[ $
��10 0q����� *NewSimulationCmd+���� $ 
Horizontal=�.+��� #��[ $��16��$��16���� $��Generate new scenario��$
��Bold"�$��5 0 0 0q��� #��[ ���� *	ExportCmd+���� $ 
Horizontal=�.+��� #��[ $��16��$��16���� $��Export execution scenario��$
��Bold"�$��5 0 0 0q��� $
��Auto=�$
��Auto=�$	��450��$��1��$��1��.���� -   $��ItemsControl������ *Program.Processes+���� .R�A� $��Center=�$
��Auto��	 A� Columns	 �� *Program.ProcessCount+���� .R��� $	��150��$
��Left=�$��5q�.+��� $ 
Horizontal=�.+��� $��Name: ���� ���� *Name+�� 
 ��Name$
 Active�� 	 CommandDisplayTemplate#��[	 ���� *
Commands+ `�  `� 	Converter# [ .1���  �� ElementName$ 
Simulation�� �� Path$ DataContext.IsSuspended��� $ ItemsControl���� $ Active���� $��2��$��16(�$��Logs:���� -   $��
LogConsole��$��3��$��3��$
��Auto=�$��Hidden=�
������ $��0q�$��14(�$��Center=����� *	LogOutput+ �� View �� .P��� $��Process�� �� Width$ 50�� �� DisplayMemberBinding �� *	Process+�� $��Description��$	 500�� �� *Description+�� $��Variable states��$	 700�� �� *States+�� $��3��$��1��$��4��.+��� $��16(�$��
Variables:���� ���� *VariableValues+���� .R��� $ 
Horizontal=�.+��� $��16(�$��80������ *Name+ � ToolTip �� *Name+�� $��16(����� *Value+�� $��16(�$��Semaphores:���� ���� *SemaphoreValues+���� .R��� $ 
Horizontal=�.+��� $��16(�$��80������ *Name+ �� *Name+�� $��16(����� *Value+