import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: "Home", link: "/" },
        { text: "About Us", link: "/about" },
    ];

    return (
        <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    PerfumeStore
                </Typography>

                {/* Desktop Menu */}
                <div sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {menuItems.map((item) => (
                        <Button 
                            key={item.text} 
                            color="inherit" 
                            component={Link} 
                            to={item.link} 
                            sx={{ fontWeight: 'bold', marginLeft: '20px' }}
                        >
                            {item.text}
                        </Button>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Drawer for Mobile Menu */}
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <List onClick={toggleDrawer(false)}>
                        {menuItems.map((item) => (
                            <ListItem button component={Link} to={item.link} key={item.text}>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};
