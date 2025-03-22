// UI component for the BagMenu scene - GBA Style
import Phaser from 'phaser';

export default class BagMenuUI {
    constructor(scene) {
        this.scene = scene;
        this.categoryIcons = [];
        this.itemTexts = [];
        this.itemQuantityTexts = [];
        
        // GBA Color Palette
        this.colors = {
            background: 0xE8F0F8,      // Light blue background
            panelBg: 0xC8D0E0,         // Slightly darker panel background
            border: 0x6890F0,          // Blue border
            text: 0x303840,            // Dark text
            highlightBg: 0x98D8D8,     // Cyan highlight background
            highlightBorder: 0x3898F8, // Bright blue highlight border
            categoryActive: 0xF85888,  // Pink for active category
            categoryInactive: 0x6890F0 // Blue for inactive category
        };
        
        // Create UI elements
        this.createBackground();
        this.createCategoryPanel();
        this.createItemPanel();
        this.createDescriptionBox();
        this.createControlsHint();
    }
    
    createBackground() {
        // Main background
        this.background = this.scene.add.rectangle(400, 300, 800, 600, this.colors.background);
        
        // Border around the screen
        this.border = this.scene.add.graphics();
        this.border.lineStyle(4, this.colors.border, 1);
        this.border.strokeRect(50, 50, 700, 500);
    }
    
    createCategoryPanel() {
        // Category panel at the top
        this.categoryPanel = this.scene.add.rectangle(400, 80, 650, 60, this.colors.panelBg);
        this.categoryPanel.setStrokeStyle(2, this.colors.border);
        
        // Create category icons/tabs
        this.categoryIcons = [];
        const categories = this.scene.categoriesHandler.getCategories();
        
        // Define category icons and their properties
        const categoryData = [
            { name: 'Items', icon: '🧪', description: 'General use items like Potions and status healers' },
            { name: 'Poké Balls', icon: '⚾', description: 'Various types of Poké Balls for catching Pokémon' },
            { name: 'Key Items', icon: '🔑', description: 'Important items for your journey' },
            { name: 'TMs & HMs', icon: '💿', description: 'Move teaching machines for Pokémon' },
            { name: 'Berries', icon: '🍓', description: 'Special items with various effects' }
        ];
        
        categories.forEach((category, index) => {
            const tabX = 150 + (index * 120);
            const tabY = 80;
            
            // Create tab container
            const container = this.scene.add.container(tabX, tabY);
            
            // Tab background with GBA style
            const tabBg = this.scene.add.rectangle(0, 0, 100, 50, this.colors.panelBg);
            tabBg.setStrokeStyle(2, this.colors.border);
            
            // Create icon background (circle)
            const iconBg = this.scene.add.circle(0, -10, 15, this.colors.background);
            iconBg.setStrokeStyle(2, this.colors.border);
            
            // Create icon
            const icon = this.scene.add.text(0, -10, categoryData[index].icon, {
                fontSize: '20px'
            }).setOrigin(0.5);
            
            // Create category name text
            const text = this.scene.add.text(0, 15, category, {
                fontSize: '12px',
                fill: '#303840',
                fontFamily: 'monospace'
            }).setOrigin(0.5);
            
            // Add all elements to the container
            container.add([tabBg, iconBg, icon, text]);
            
            // Store references for highlighting
            this.categoryIcons.push({
                container,
                tabBg,
                iconBg,
                icon,
                text,
                data: categoryData[index]
            });
        });
    }
    
    // Removed duplicate updateCategoryHighlighting method that was here
    
    createItemPanel() {
        // Item panel (main area)
        this.itemPanel = this.scene.add.rectangle(400, 280, 650, 300, this.colors.panelBg);
        this.itemPanel.setStrokeStyle(2, this.colors.border);
        
        // Create scrollable container for items
        this.itemContainer = this.scene.add.container(175, 150);
        this.itemTexts = [];
        this.itemQuantityTexts = [];
        
        // Add scroll indicators
        this.scrollUpIndicator = this.scene.add.text(650, 150, '▲', {
            fontSize: '20px',
            fill: '#303840'
        }).setOrigin(0.5);
        
        this.scrollDownIndicator = this.scene.add.text(650, 410, '▼', {
            fontSize: '20px',
            fill: '#303840'
        }).setOrigin(0.5);
    }
    
    createDescriptionBox() {
        // Description box at the bottom
        this.descriptionBox = this.scene.add.rectangle(400, 480, 650, 80, this.colors.panelBg);
        this.descriptionBox.setStrokeStyle(2, this.colors.border);
        
        // Description text
        this.descriptionText = this.scene.add.text(80, 480, '', {
            fontSize: '16px',
            fill: '#303840',
            fontFamily: 'monospace',
            wordWrap: { width: 600 }
        }).setOrigin(0, 0.5);
    }
    
    createControlsHint() {
        // Controls hint at the bottom
        this.controlsPanel = this.scene.add.rectangle(400, 540, 650, 30, this.colors.border);
        
        // Button hints
        this.controlsText = this.scene.add.text(400, 540, 'A: USE    B: BACK    ◀▶: CATEGORY    ▲▼: SELECT', {
            fontSize: '14px',
            fill: '#FFFFFF',
            fontFamily: 'monospace'
        }).setOrigin(0.5);
    }
    
    updateItemList() {
        console.log('[BagMenuUI] Updating item list');
        console.log(`[BagMenuUI] Current category: ${this.scene.categoriesHandler.getSelectedCategory()}, index: ${this.scene.selectedCategory}`);
        
        // Clear existing items
        console.log(`[BagMenuUI] Clearing ${this.itemTexts.length} existing items`);
        this.itemTexts.forEach(item => {
            if (item.text) item.text.destroy();
            if (item.bg) item.bg.destroy();
        });
        this.itemQuantityTexts.forEach(text => {
            if (text) text.destroy();
        });
        this.itemTexts = [];
        this.itemQuantityTexts = [];
        console.log('[BagMenuUI] Cleared existing items');

        // Get items for current category
        const items = this.scene.itemsHandler.getCurrentItems();
        console.log(`[BagMenuUI] Retrieved ${items.length} items for category ${this.scene.categoriesHandler.getSelectedCategory()}`);
        console.log('[BagMenuUI] Items:', items.map(item => item.name).join(', '));
        const startY = 0;

        if (items.length === 0) {
            const text = this.scene.add.text(400, 280, 'No items', {
                fontSize: '18px',
                fill: '#303840',
                fontFamily: 'monospace'
            }).setOrigin(0.5);
            this.itemTexts.push({ text, bg: null });
            console.log('[BagMenuUI] Added "No items" text');
        } else {
            items.forEach((item, index) => {
                // Item selection background (only visible when selected)
                const itemBg = this.scene.add.rectangle(400, 180 + (index * 40), 600, 35, this.colors.highlightBg);
                itemBg.setStrokeStyle(2, this.colors.highlightBorder);
                itemBg.setVisible(false);
                
                // Item name
                const text = this.scene.add.text(200, 180 + (index * 40), item.name, {
                    fontSize: '18px',
                    fill: '#303840',
                    fontFamily: 'monospace'
                }).setOrigin(0, 0.5);
                
                // Item quantity
                const quantityText = this.scene.add.text(600, 180 + (index * 40), `x${item.quantity}`, {
                    fontSize: '18px',
                    fill: '#303840',
                    fontFamily: 'monospace'
                }).setOrigin(1, 0.5);
                
                this.itemTexts.push({ text, bg: itemBg });
                this.itemQuantityTexts.push(quantityText);
            });
            console.log(`[BagMenuUI] Added ${items.length} items to the UI`);
        }
        
        // Show/hide scroll indicators based on item count
        this.scrollUpIndicator.setVisible(items.length > 7);
        this.scrollDownIndicator.setVisible(items.length > 7);
        console.log('[BagMenuUI] Item list update complete');
    }
    
    updateCategoryHighlighting() {
        console.log(`[BagMenuUI] Updating category highlighting, selected: ${this.scene.selectedCategory}`);
        // Update category highlighting
        this.categoryIcons.forEach((category, index) => {
            const isSelected = index === this.scene.selectedCategory;
            console.log(`[BagMenuUI] Category ${index} isSelected: ${isSelected}`);
            
            if (isSelected) {
                category.tabBg.setFillStyle(this.colors.highlightBg);
                category.tabBg.setStrokeStyle(2, this.colors.highlightBorder);
                category.iconBg.setFillStyle(this.colors.highlightBg);
                category.iconBg.setStrokeStyle(2, this.colors.highlightBorder);
                category.text.setColor('#000000');
                category.container.setScale(1.05);
                console.log(`[BagMenuUI] Category ${index} highlighted`);
            } else {
                category.tabBg.setFillStyle(this.colors.panelBg);
                category.tabBg.setStrokeStyle(2, this.colors.border);
                category.iconBg.setFillStyle(this.colors.background);
                category.iconBg.setStrokeStyle(2, this.colors.border);
                category.text.setColor('#303840');
                category.container.setScale(1);
            }
        });
    }
    
    updateItemHighlighting() {
        console.log(`[BagMenuUI] Updating item highlighting, isInItemList: ${this.scene.isInItemList}, selectedItem: ${this.scene.selectedItem}`);
        console.log(`[BagMenuUI] Number of items in list: ${this.itemTexts.length}`);
        
        // Update item highlighting
        this.itemTexts.forEach((item, index) => {
            if (this.scene.isInItemList && index === this.scene.selectedItem) {
                console.log(`[BagMenuUI] Highlighting item at index ${index}`);
                if (item.bg) item.bg.setVisible(true);
                if (item.text) item.text.setColor('#FFFFFF');
                if (this.itemQuantityTexts[index]) {
                    this.itemQuantityTexts[index].setColor('#FFFFFF');
                }
                
                // Add selection cursor
                if (!this.selectionCursor) {
                    this.selectionCursor = this.scene.add.text(175, 180 + (index * 40), '▶', {
                        fontSize: '18px',
                        fill: '#F85888',
                        fontFamily: 'monospace'
                    }).setOrigin(0.5);
                } else {
                    this.selectionCursor.setPosition(175, 180 + (index * 40));
                    this.selectionCursor.setVisible(true);
                }
            } else {
                if (item.bg) item.bg.setVisible(false);
                if (item.text) item.text.setColor('#303840');
                if (this.itemQuantityTexts[index]) {
                    this.itemQuantityTexts[index].setColor('#303840');
                }
            }
        });
        
        // Hide cursor if not in item list
        if (this.selectionCursor && !this.scene.isInItemList) {
            this.selectionCursor.setVisible(false);
        }
    }
    
    updateItemDescription() {
        // Update description
        const items = this.scene.itemsHandler.getCurrentItems();
        console.log(`[BagMenuUI] Updating item description, isInItemList: ${this.scene.isInItemList}, items length: ${items.length}`);
        if (this.scene.isInItemList && items.length > 0) {
            const description = items[this.scene.selectedItem].description;
            console.log(`[BagMenuUI] Setting description text to: ${description}`);
            this.descriptionText.setText(description);
        } else {
            console.log('[BagMenuUI] Setting default description text');
            // Show category description when not in item list
            const categoryData = this.categoryIcons[this.scene.selectedCategory].data;
            this.descriptionText.setText(categoryData.description);
        }
    }
}