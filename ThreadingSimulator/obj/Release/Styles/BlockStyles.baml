   M S B A M L   `   `   `  ���� M  IThreadingSimulator, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullE'clr-namespace:ThreadingSimulator.StylesThreadingSimulator.Styles  O Kmscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e0891&clr-namespace:System;assembly=mscorlibSystem C&clr-namespace:ThreadingSimulator.EnumsThreadingSimulator.Enums  M+clr-namespace:ThreadingSimulator.ConvertersThreadingSimulator.Converters  U QGongSolutions.WPF.DragDrop, Version=1.1.0.0, Culture=neutral, PublicKeyToken=nullkLclr-namespace:GongSolutions.Wpf.DragDrop;assembly=GongSolutions.Wpf.DragDropGongSolutions.Wpf.DragDrop W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089X TXceed.Wpf.Toolkit, Version=3.4.0.0, Culture=neutral, PublicKeyToken=3e4669d2f30244f4@   :ThreadingSimulator.Converters.MultivalueParameterConverter    MultivalueParameterConverter8  2ThreadingSimulator.Converters.BorderStyleConverter  BorderStyleConverter;  5ThreadingSimulator.Converters.LoopBlockWidthConverter  LoopBlockWidthConverter>  8ThreadingSimulator.Converters.CommandBackgroundConverter  CommandBackgroundConverter?  9ThreadingSimulator.Converters.CommandDisplayTextConverter  CommandDisplayTextConverterD  >ThreadingSimulator.Converters.PuzzlePlacementVerticalConverter $  PuzzlePlacementVerticalConverterF  @ThreadingSimulator.Converters.PuzzlePlacementHorizontalConverter & "PuzzlePlacementHorizontalConverter   BooleanToVisibilityConverter  	Resources  �� Source 
	 Delete �� 	UriSource 
 SemaphorOperationValues S� 
MethodName S� 
ObjectType  System.Enum S� MethodParameters M� TypeName  VariableOperationValues5  /ThreadingSimulator.Styles.BlockTemplateSelector  TemplateSelector   ResourceDictionary>	  8ThreadingSimulator.Styles.DraggableBlockTemplateSelector  DraggableTemplateSelector 	  ResourceDictionary  	ListStyle �� 
TargetType	 �� Property
 �� Value  DraggableBlockStyle  BorderStyle `� 	Converter �� RelativeSource �� AncestorType �� Path  ListBorderStyle �� BasedOn  DraggableBorderStyle  ButtonStyle �� Triggers P� Property P� Value  
BlockColor  SemaphorBlockColor  VariableBlockColor  LoopBlockColor  SuspendedColor  ActiveColor  DraggableBlockTemplate �� Padding " DraggableSemaphorBlockTemplate  DraggableLoopBlockTemplate " DraggableVariableBlockTemplate  BlockTemplate �� Padding �� Orientation � LayoutTransform �� CenterX �� CenterY �� Angle �� ScaleX �� ScaleY �� Left
 �� Top �� StrokeLineJoin �� StrokeStartLineCap  �� StrokeEndLineCap! B� FillRule" � ToolTip# �� ElementName$ �� 	Converter  SemaphorBlockTemplate% �� SelectedItem& �� Source4
   .ThreadingSimulator.Enums.SemaphorOperationType' 
  EXIT( �� Value) �� Binding   VariableBlockTemplate4   .ThreadingSimulator.Enums.VariableOperationType
*   SET
+   GET,   INCREASE-   DECREASE%  Xceed.Wpf.Toolkit.IntegerUpDown�  �Xceed.Wpf.Toolkit.NumericUpDown`1[[System.Nullable`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]].   	Increment�  �Xceed.Wpf.Toolkit.Primitives.UpDownBase`1[[System.Nullable`1[[System.Int32, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]/   Value ! LoopBlockTemplate0 ��Name1   Minimum)  #GongSolutions.Wpf.DragDrop.DragDrop2   IsDropTarget#3   UseDefaultEffectDataTemplate4   DropHandler5   IsDragSource " CommandDisplayTemplate6 �� CornerRadius # DispatcherValueTemplate�� D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    :x,http://schemas.microsoft.com/winfx/2006/xaml     1local'clr-namespace:ThreadingSimulator.Styles  .sys&clr-namespace:System;assembly=mscorlib  1models&clr-namespace:ThreadingSimulator.Enums  :
converters+clr-namespace:ThreadingSimulator.Converters  SddLclr-namespace:GongSolutions.Wpf.DragDrop;assembly=GongSolutions.Wpf.DragDrop  5extra)http://schemas.xceed.com/wpf/xaml/toolkit  %*  &	        &	      &	 
     &	      &	      &	      &	      &	 #     &	 (     &		 D     &	
 m     &	 �     &	 �     7  &	     7  &	     7  &	 =    7  &	 ]    7  &	 q    7  &	 �    &	 K    &	 �    &	 �    &	 �    &	     &	     &	 -    &	 >    7  7  &	 t    7  7  &	 �    7  7  &	 �    7  7  &	     7  7  7  7  7  7  7  7   7 	 &	 �
    7  7  7  7  7  7 
 7  7   7 	 7  &	      7  7  7  7  7  7  7  7  7   7 	 &	! �    7  7  7  7  7  7  7  7  7  7  7  7  7  7  7   7 	 7  7  &	" &    7  7  7  7  &	# ^'                   �� �� $  BlockStyles.xaml?��� $# ../Assets/icons8-waste-48.png?�S� $ 	GetValues��"   M� $" models:SemaphorOperationType��S� $ 	GetValues��"   M� $" models:VariableOperationType��  8   	  8   �� " ����� 	 � ��8
   �� 	 � ��

 ���� �� 	 � ��

 ���� �� 	 � ��$
 0q��� 	 � ��$
 0q��� 	 � ��$
 0q��� 	 � ��$
 Stretch=��� 	 � ��
 �� " ����� 	 � ��$
 0q��� 	 � ��$
 0q��� 	 � ��$
 0q��� 	 �@K�ZIndex
 �� *ZIndex+�� " ����� 	 � ��8
   �� " ����� 	 � ��$
 0q��� 	 �@��Padding$
 0q��� 	 � ��$
 0q��� 	 �@�Tag
 ��True���� 	 �@��CornerRadius
 `� 8   .1���  �� *FindAncestor+" ����  �� *Self+�� $ Items.Count� �� *FindAncestor+" ���� " ��8   ��� 	 � ��

 ������� 	 � ��$
 2q��� 	 �@��CornerRadius$
 	10 0 0 10���� " ����� 	 �@��CornerRadius$
 10���� 	 � ��$
 Center=��� 	 �@��Padding$
 	20 3 20 0q��� " ����� 	 � ��

 ���� �� 	 � ��

 ���� �� 	 � ��$
 0q� P�  � {� .  . ��� 	 �@J�Opacity$	
 0.3Q���#27AE60����#C0392B����#2980B9����#8E44AD����#C0392B����#27AE60���� .R��� 8��  8�� ._��� $��Commands��$ 5q��� .R��� 8��  8�� ._��� $��Semaphor��$ 5q��� .R��� 8��  8�� ._��� $
��Loop��$ 5q��� .R��� 8��  8�� ._��� $��Shared variable��$ 5q��� .R�� 
�������.+��� 8��  8�� $	��145��$ 0 5 0 0q�$
��Left=�._��� $ 
Horizontal=�.+���  V� .~��� $	 0.5Q�$	 0.5Q�$	 180Q��� $	 0.6Q�$	 0.6Q�.+�A� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��path3684��$	 -40��$
��23.8��$	 -45��$
��23.5��8�� $��
0.26458332��F� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��path3720��8�� $
 41.8��$ -193.7��$ Miter=�$
 Flat=�$
  Flat=���B� $t��nm -80.453499 164.96885 c 0 0 6.280833 8.55263 0 11.8935 -6.280835 3.34086 20.713388 1.20271 15.902538 -4.94449C�$! NonZero=�F� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��	path37201��8�� $
 41.8��$ -193.7��$ Miter=�$
 Flat=�$
  Flat=���B� $u��om -58.921074 164.8905 c 0 0 -6.280833 8.55263 0 11.8935 6.280835 3.34086 -20.713388 1.20271 -15.902538 -4.94449C�$! NonZero=��� $��Block of commands��$ 5q�$	��120���� $��16��$��16��$��0 0 5 0q�$" Delete block��8�� y��� $# Control��$ DataContext.EditMode�8$  ���� $# Control��$  DataContext.DeleteBlockCmd���`� 8  .1��� $ DataContext� �� *Self+�� $ DataContext� �� *FindAncestor+" ������ 8�� �� .R�� 
�������.+��� 8��  8�� $	��210��$ 0 5 0 0q�$
��Left=�._��� $ 
Horizontal=�.+���  V� .~��� $	 0.5Q�$	 0.5Q�$	 180Q��� $	 0.6Q�$	 0.6Q�.+�A� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��path3684��$	 -40��$
��23.8��$	 -50��$
��23.5��8�� $��
0.26458332��F� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��path3720��8�� $
 41.8��$ -198.7��$ Miter=�$
 Flat=�$
  Flat=���B� $t��nm -80.453499 164.96885 c 0 0 6.280833 8.55263 0 11.8935 -6.280835 3.34086 20.713388 1.20271 15.902538 -4.94449C�$! NonZero=�F� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��	path37201��8�� $
 41.8��$ -198.7��$ Miter=�$
 Flat=�$
  Flat=���B� $u��om -58.921074 164.8905 c 0 0 -6.280833 8.55263 0 11.8935 6.280835 3.34086 -20.713388 1.20271 -15.902538 -4.94449C�$! NonZero=��� $��5 8 0 0q�$��
Semaphor: ���� $��10 5 0 5q�$��30��{��� $# Control��$ DataContext.EditMode����� *SemaphorName+�� $��
SemaphorOp��$��	10 5 10 5q�{��� $# Control��$ DataContext.EditMode�% �� *SemaphorOperation+���� 8&  �� $��16��$��16��$" Delete block��y��� $# Control��$ DataContext.EditMode�8$  ���� $# Control��$  DataContext.DeleteBlockCmd���`� 8  .1��� $ DataContext� �� *Self+�� $ DataContext� �� *FindAncestor+" ������ 8�� ���� " ��8 	  �� #( Z' ) �� *SelectedItem+$# 
SemaphorOp��.a��� 	 � ��$
 12 0 5 0q��� .R�� 
�������.+��� 8��  $ 0 5 0 0q�$
��Left=����� " ��8   �� #( Z* ) �� *VariableOperationType+.a��� 	 � ��$	
 240���� #( Z+ ) �� *VariableOperationType+.a��� 	 � ��$	
 180���� #( Z, ) �� *VariableOperationType+.a��� 	 � ��$	
 280���� #( Z- ) �� *VariableOperationType+.a��� 	 � ��$	
 280��._��� .+���  V� .~��� $	 0.5Q�$	 0.5Q�$	 180Q��� $	 0.6Q�$	 0.6Q�.+�A� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��path3684��$	 -77��$
��23.8��$
��23.5��8�� $��
0.26458332������ " A� �� #( Z+ ) �� *VariableOperationType+.a��� 	 �@��Left$	
 110���� #( Z* ) �� *VariableOperationType+.a��� 	 �@��Left$	
 160���� #( Z, ) �� *VariableOperationType+.a��� 	 �@��Left$	
 192���� #( Z- ) �� *VariableOperationType+.a��� 	 �@��Left$	
 192��F� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��path3720��8�� $ -225.7��$ Miter=�$
 Flat=�$
  Flat=����� " F� �� #( Z+ ) �� *VariableOperationType+.a��� 	 �@��Left$	
 192���� #( Z* ) �� *VariableOperationType+.a��� 	 �@��Left$	
 242���� #( Z, ) �� *VariableOperationType+.a��� 	 �@��Left$	
 274���� #( Z- ) �� *VariableOperationType+.a��� 	 �@��Left$	
 274����B� $t��nm -80.453499 164.96885 c 0 0 6.280833 8.55263 0 11.8935 -6.280835 3.34086 20.713388 1.20271 15.902538 -4.94449C�$! NonZero=�F� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��	path37201��8�� $ -225.7��$ Miter=�$
 Flat=�$
  Flat=����� " F� �� #( Z+ ) �� *VariableOperationType+.a��� 	 �@��Left$	
 192���� #( Z* ) �� *VariableOperationType+.a��� 	 �@��Left$	
 242���� #( Z, ) �� *VariableOperationType+.a��� 	 �@��Left$	
 274���� #( Z- ) �� *VariableOperationType+.a��� 	 �@��Left$	
 274����B� $u��om -58.921074 164.8905 c 0 0 -6.280833 8.55263 0 11.8935 6.280835 3.34086 -20.713388 1.20271 -15.902538 -4.94449C�$! NonZero=��� $ 
Horizontal=�.+��� $��5 7 0 0q�$��
Variable: ���� $��10 5 0 5q�$��30��{��� $# Control��$ DataContext.EditMode����� *VariableName+�� $��
VariableOp��$��10 5 0 5q�% �� *VariableOperationType+{��� $# Control��$ DataContext.EditMode����� 8&  � ���� " � �� #( Z+ ) �� *VariableOperationType+.a��� 	 � y�$
 	Collapsed=�.+��� $��5 7 0 0q�$��to������ " �� �� #( Z, ) �� *VariableOperationType+.a��� 	 � y�$
 	Collapsed=��� #( Z- ) �� *VariableOperationType+.a��� 	 � y�$
 	Collapsed=��� $��5 7 0 0q�$��by������ " �� �� #( Z* ) �� *VariableOperationType+.a��� 	 � y�$
 	Collapsed=�  $��20 5 0 5q�$. 1X�$��40��{��� $# Control��$ DataContext.EditMode�/ �� *Value+�� $��16��$��16��$	��5 0q�$" Delete block��8�� y��� $# Control��$ DataContext.EditMode�8$  ���� $# Control��$  DataContext.DeleteBlockCmd���`� 8  .1��� $ DataContext� �� *Self+�� $ DataContext� �� *FindAncestor+" ������ 8��	 �� .R�� 
�������.+��� $0 Border��8��  8�� $
��Left=�$ 0 5 0 0q���`� 8  .1��� $# InnerListBox���� $# InnerListBox��$ ActualHeight��� $# InnerListBox��$ ItemsSource�._��� $	��170��.+��� $��0��$��0�� V� .~��� $	 0.5Q�$	 0.5Q�$	 180Q��� $	 0.6Q�$	 0.6Q�.+�A� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��path3684��$
��23.8��$
��23.5��8�� $��
0.26458332������ " A�.��� 	 �@��Top
 `� 8  .1��� $# InnerListBox��$ ActualHeight��� $# Border��$	 Tag��� 	 �@��Left
 `� 8  .1��� $# Border��$ ActualWidth��� $# Border��$	 Tag�F� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��path3720��8�� $ Miter=�$
 Flat=�$
  Flat=����� " F�.��� 	 �@��Top
 `� 8  .1��� $# InnerListBox��$ ActualHeight��� 	 �@��Left
 `� 8  .1��� $# Border��$ ActualWidth���B� $t��nm -80.453499 164.96885 c 0 0 6.280833 8.55263 0 11.8935 -6.280835 3.34086 20.713388 1.20271 15.902538 -4.94449C�$! NonZero=�F� :x,http://schemas.microsoft.com/winfx/2006/xaml     $��	path37201��8��	 $ Miter=�$
 Flat=�$
  Flat=����� " F�.��� 	 �@��Top
 `� 8 
 .1��� $# InnerListBox��$ ActualHeight��� 	 �@��Left
 `� 8  .1��� $# Border��$ ActualWidth���B� $u��om -58.921074 164.8905 c 0 0 -6.280833 8.55263 0 11.8935 6.280835 3.34086 -20.713388 1.20271 -15.902538 -4.94449C�$! NonZero=�� .+��� $��5 5 0 0q�$��Iterations:��  $��70 5 0 5q�$1 1X�$. 1X�$��40��$
��Left=�{��� $# Control��$ DataContext.EditMode�/ �� *
Iterations+�� $��16��$��16��$��Right=�$��50 0 5 0q�$" Delete block��8�� y��� $# Control��$ DataContext.EditMode�8$  ���� $# Control��$  DataContext.DeleteBlockCmd���`� 8  .1��� $ DataContext� �� *Self+�� $ DataContext� �� *FindAncestor+" ������ 8�� �� 8�� 
�������$��	20 0 0 10q�$ 0 0 5 0q�._��� .+��� $��InnerListBox��2 . 3 . $��15��8�� ���� *
Children+4 �� $# Control��$ DataContext�5 �� $# Control��$ DataContext.EditMode��� .R��� $0 Border��$6 10����`� 8   .1��� $
 Type��� 8&  �� $# Border��$ DataContext.DisplayColor��� $# 
Simulation��$	 Tag��� $# Active��$	 Tag�._��� ���� 8$  " �� 8$  �� .R��� 
�������$��1q�$��30��$��22��._��� $	 5 2q����� 