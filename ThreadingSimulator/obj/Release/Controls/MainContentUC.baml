   M S B A M L   `   `   `  ���� M  IThreadingSimulator, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullI)clr-namespace:ThreadingSimulator.ControlsThreadingSimulator.Controls  C&clr-namespace:ThreadingSimulator.EnumsThreadingSimulator.Enums  O Kmscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e0891&clr-namespace:System;assembly=mscorlibSystem U QGongSolutions.WPF.DragDrop, Version=1.1.0.0, Culture=neutral, PublicKeyToken=nullkLclr-namespace:GongSolutions.Wpf.DragDrop;assembly=GongSolutions.Wpf.DragDropGongSolutions.Wpf.DragDrop J FMrMitch.Loaders, Version=1.1.0.1, Culture=neutral, PublicKeyToken=null:.clr-namespace:Loaders;assembly=MrMitch.LoadersLoaders M+clr-namespace:ThreadingSimulator.ConvertersThreadingSimulator.Converters  /    )ThreadingSimulator.Controls.MainContentUC   W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     @d2http://schemas.microsoft.com/expression/blend/2008     ;local)clr-namespace:ThreadingSimulator.Controls     8enums&clr-namespace:ThreadingSimulator.Enums     6sys&clr-namespace:System;assembly=mscorlib     [ddLclr-namespace:GongSolutions.Wpf.DragDrop;assembly=GongSolutions.Wpf.DragDrop     Bloaders.clr-namespace:Loaders;assembly=MrMitch.Loaders     B
converters+clr-namespace:ThreadingSimulator.Converters     -     >�Name$  Control�� � 	Resources    BlockTypeValues S� 
MethodName S� 
ObjectType  System.Enum S� MethodParameters M� TypeName   BooleanToVisibilityConverter:  4ThreadingSimulator.Converters.InvertBooleanConverter  InvertBooleanConverter  Add �� 	UriSource  Edit  Save 
 Cancel 
 Delete  Preview 	 Run��%�  &	        &	 9     &	 >     &	 C     &	 k     &	 �     &	 �     &	 �     &	     &		 E    S� $ 	GetValues��"   M� $ enums:BlockType����   �� $" ../Assets/icons8-plus-48.png?��� $% ../Assets/icons8-compose-48.png?��� $&  ../Assets/icons8-save-all-48.png?��� $$ ../Assets/icons8-delete-48.png?��� $# ../Assets/icons8-waste-48.png?��� $* $../Assets/icons8-preview-pane-48.png?��� $" ../Assets/icons8-play-64.png?�.��� .+�� $��0 10 0 0q� � RowDefinitions �� $��25 ��� �� $��25 ��� $��10 � � ColumnDefinitions �� $��5 ��� $	��220 ��� $��10 ��� �� $��5 ��� $��10 �.+��� $��0��$��1��	 �� Orientation$	 
Horizontal=�.+��� $��Predefined examples:���� $��50 0 5 0q�
 � ToolTip$
 Add new example�� 
 ButtonStyle#��[
 ���� *AddCmd+���� #��[ $��16��$��16���� $
 Edit selected example��#��[
 ���� *	EditCmd+���� #��[ $��16��$��16���� $��1��$��1��$��Stretch=����� *
Programs+ �� SelectedItem �� *	Program+{��� *
EditMode+ �� 	Converter# [ ���� .R��  �� $��* ��� $
��Auto �.+��� $��0��$	 Vertical=�.+��� $��0��$	��130��$��0 1 0 0q�$��CharacterEllipsis=����� *Name+
 �� *Name+]� $��1��$��Center=�.+��� $��1��$
 Delete example��#��[
 ����  �� ElementName$ Control�� �� Path$ DataContext.DeleteCmd����� ���� #��[ $��16��$��16��� $��0��$��2��$��3�� �� $��20 ��� $��20 ��� �� $��30 �.+��� $��0��$��0��$	 
Horizontal=�$��Right=�.+��� #��[
 ���� *RunCmd+y��� *CanRun+# [ ���� $	 
Horizontal=�.+��� #��[	 $��16��$��16���� $	��Run��$
��Bold"�$��5 0 0 0q��� #��[
 $
��10 0q����� *
PreviewCmd+y��� *
CanPreview+# [ ���� $	 
Horizontal=�.+��� #��[ $��22��$��22��$��0 -2 0 0q��� $��Preview processes��$
��Bold"�$��5 0 0 0q��� $
 Save example��#��[
 ���� *	SaveCmd+y��� *
EditMode+# [ ���� #��[ $��16��$��16���� $
 Cancel edit��#��[
 ���� *	CancelCmd+y��� *
EditMode+# [ ���� #��[ $��16��$��16���� $��1��$	 
Horizontal=�.+��� $��Name:��$��0 -3 0 0q�y��� *ProgramSelected+# [ �� $	��150������ *Program.Name+{��� *
EditMode+y��� *ProgramSelected+# [ �� $��2��$��0��$��2��$
��0 10q�$
��Auto=�$
��Auto=�.���� -    ��Name$ Panel��$	 
Horizontal=�.+��� ���� *Program.Processes+���� .R�A�  A� Columns �� *Program.ProcessCount+���� .R��  �� $��20 ��� $��20 ��� .+��� $��0��$��16��$
 Delete process��$��16��#��[
 $��Right=�$��0 0 5 0q�{��� *
EditMode+���� $ Control��$" DataContext.DeleteProcessCmd�y��� $ Control��$ DataContext.EditMode�# [ ���� ���� #��[ �� $��1��$	 
Horizontal=�.+��� $��Process Name:��$��0 -3 0 0q��� $	��130������ *Name+{��� $ Control��$ DataContext.EditMode��� $��2��$	��150��$	��280��$��0 10 0 0q�)  #GongSolutions.Wpf.DragDrop.DragDrop   IsDropTarget . #   UseDefaultEffectDataTemplate .   	ListStyle#��[    DropHandler �� $ Control��$ DataContext�   IsDragSource �� $ Control��$ DataContext.EditMode�{��� *
EditMode+���� *Blocks+� ���� $ Panel��$ ActualHeight�.+��� $
 Add new process��#��[
 $��Center=�$��Center=����� *AddProcessCmd+y��� *
EditMode+# [ ���� #��[ $��48��$��48���� $��3��  DraggableTemplateSelector#��[  �� $ Control��$ DataContext.EditMode�y��� *
EditMode+# [ ����  �� Source# [  ���� .R�A�  �� # [  $ Count��� $��2��$��2��$	 
Horizontal=�.+��� $��Current mode:���� ���� *ModeIndicator+� 
������� J� Opacity$	 0.5Q�y��� *Busy+# [ � .+�  Loaders.ChromeLoader  $	��100��$	��100��y��� *Busy+# [ 